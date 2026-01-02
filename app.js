// Load Environment Variables
require('dotenv').config();

// Core Modules
const path = require('path');
const fs = require('fs');

// External Modules
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const multer = require('multer');
const axios = require('axios');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
const PDFDocument = require('pdfkit');

// Models
const User = require('./server/models/User');

// App Initialization
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(expressLayouts);

// EJS Setup
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Multer Setup
const upload = multer({ dest: 'uploads/' });

// Session Middleware
app.use(
  session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_URI }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// Routes
const routes = require('./server/routes/fioreRoutes');
const budgetRoutes = require('./server/routes/budget');

app.use('/', routes);
app.use('/budget', budgetRoutes);

// Static Pages Setup
const staticPages = [
  'weddings', 'engagements', 'bride_to_be', 'bachelor_party', 
  'rehearsal_dinner', 'couple_shower', 'mehndi_night', 'marriage_proposal',
  'search-images', 'upload', 'wedding_ceremony', 'uda-rata-wedding', 'pahatharata-wedding', 'western-wedding',
  'wedding_themes', 'udarata_pre_wedding', 'udarata_weddingday', 'udarata_post_wedding', 'pahatharata_pre_wedding',
  'pahatharata_weddingday', 'pahatharata_post_wedding', 'western_pre_wedding', 'western_weddingday', 'western_post_wedding',
  'Indian-wedding', 'indian_pre_wedding', 'indian_weddingday', 'indian_post_wedding', 'bride-welcoming', 'haldi_ceremony', 
  'preshoot', 'locations', 'honeymoon', 'DubaiHoneymoon', 'MaldivesHoneymoon', 'MalaysiaHoneymoon', 'SrilankaHoneymoon',
  'SingaporeHoneymoon', 'ThailandHoneymoon', 'photo_video', 'dayafterbrunch', 'planning', 'After_party', 'homecoming_day', 
  'homecoming_main_page', 'homecoming_planning', 'homecoming_planning_Auspicious_Dates', 'homecoming_planning_guestlist_invitations', 
  'homecoming_planning_venue_decor', 'homecoming_planning_dress_code_theme', 'homecoming_planning_entertainment', 
  'homecoming_planning_photography', 'homecoming_planning_catering', 'homecoming_planning_cake', 'religious_blessing', 
  'places', 'gift_opening_party', 'second_reception', 'catering_services', 'dancing_groups_girls', 'DJ', 'entertainment', 
  'jewellary_shops', 'kandyan_dance', 'low_country_dance', 'musical_band', 'link_photographers', 'astrologers', 'invitation_card_printers', 
  'hotels', 'dresses', 'learn_registration', 'other_gathering_main_page', 'Baby_showerUpdated', 'BabyShower_Theme',
  'BabyShower_food_drink', 'BabyShower_gift_ideas', 'Baby_shower_photography', 'Baby_shower_games', 'Gender_RevealUpdated', 
  'Gender_Reveal_ideas', 'Gender_Reveal_Theme', 'Gender_Reveal_games', 'Gender_Reveal_food_drink', 'Gender_Reveal_return_gift_ideas', 
  'Anniversary_CelebrationUpdated', 'Anniversary_Celebration_venues', 'Anniversary_Celebration_foods', 'Anniversary_Celebration_entertainment', 
  'Anniversary_Celebration_Photography', 'Anniversary_Celebration_vows', 'Anniversary_Celebration_return_gifts', 'Graduation_PartiesUpdated', 
  'Graduation_Parties_Theme', 'Graduation_Parties_entertainment', 'Graduation_Parties_memory_wall', 'Graduation_Parties_Catering_Dessert', 
  'Graduation_Parties_return_gifts', 'Retirement_PartiesUpdated', 'Retirement_Parties_tributes', 'Retirement_Parties_Theme', 'Retirement_Parties_entertainment', 
  'Retirement_Parties_food_drink', 'Retirement_Parties_Return_Gift_Ideas', 'Housewarming_PartiesUpdated', 'Housewarming_Parties_welcome_ideas',
  'Housewarming_Parties_Food_Drinks_Gathering', 'Housewarming_Parties_home_tour', 'Housewarming_Parties_return_gifts', 'birthday', 'deco', 'birthday_cake', 'food_drinks', 'venue', 'photo', 'entertainments',
  'first_bday_bash', 'magical_unicorn', 'teddy_bear_picnic', 'dinosaur_roar', 'rainbow_fun', 'under_sea', 'superhero',
  'space_exploration', 'pirates_treasure', 'minecraft', 'princesses', 'circus', 'glow_party', 'hollywood', 'festival_vibes',
  'virtual', 'black_gold', 'beach_party', 'casino_night', 'wine_cheese', 'twentyfirst_birthday', 'retro_golden', 'garden_hightea',
  'family_reunion', 'cake_shop', 'catering', 'cafe', 'bdhotels', 'photographer_collection', 'decorators', 'Makeup_Artists',
  'cake_supplier', 'bride_to_be_games', 'GiftShops', 'Bachelor_Games', 'Liquor', 'Couple_shower_games', 'henna-designers', 
  'mehndi_traditions', 'terms', 'faq'

];

staticPages.forEach(page => {
  app.get(`/${page.replace('_', '-')}`, (req, res) => res.render(page));
});

// Authentication Pages
app.get('/', (req, res) => {
  // If already logged in, redirect to home
  if (req.session && req.session.user) {
    return res.redirect('/home');
  }
  res.render('login', { error: null });
});

app.get('/register', (req, res) => res.render('register'));
app.get('/forgot_password', (req, res) => res.render('forgot_password'));
app.get('/search_images', (req, res) => res.render('search_images'));

// Login POST Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt: ${email}`);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log('❌ User not found.');
      return res.render('login', { error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      console.log('✅ Login successful.');
      req.session.userId = user._id;
      return res.redirect('/');
    } else {
      console.log('❌ Password mismatch.');
      return res.render('login', { error: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).send('Internal Server Error');
  }
});

// Upload Page
app.get('/upload', (req, res) => res.render('upload', { description: null }));

// Analyze Uploaded Image
app.post('/analyze', upload.single('image'), async (req, res) => {
  const imagePath = req.file?.path;

  if (!imagePath) {
    return res.status(400).send('No image uploaded.');
  }

  try {
    const description = await analyzeImageWithHuggingFace(imagePath);
    res.render('upload', { description: description || 'No description found' });
  } catch (error) {
    console.error('Error analyzing image:', error);
    res.status(500).send('Error analyzing image.');
  } finally {
    fs.unlink(imagePath, err => {
      if (err) console.error('Failed to delete uploaded image:', err);
    });
  }
});

// Hugging Face Image Analysis Function
async function analyzeImageWithHuggingFace(imagePath) {
  const imageData = fs.readFileSync(imagePath);

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
      imageData,
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
          'Content-Type': 'application/octet-stream',
        },
      }
    );

    const predictions = response.data;

    if (Array.isArray(predictions)) {
      return predictions
        .map(prediction => `${prediction.label} (${(prediction.score * 100).toFixed(2)}%)`)
        .join(', ');
    } else {
      return 'No description found';
    }
  } catch (error) {
    console.error('Error calling HuggingFace API:', error.response?.data || error.message);
    return 'Error analyzing image';
  }
}

// MongoDB Connection and Server Start
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
  });
