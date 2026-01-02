const express = require('express');
const router = express.Router();
const fioreController = require('../controllers/fioreController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const isAuthenticated = require('../middlewares/authMiddleware');
const sendEmail = require('../utils/emailService');

// Pages (GET)

router.get('/', fioreController.homepage);
router.get('/terms', fioreController.termspage);
router.get('/faq', fioreController.faqpage);
router.get('/weddings', fioreController.weddingspage);
router.get('/birthday-parties', fioreController.birthdaypartiespage);
router.get('/other-gatherings', fioreController.othergatheringspage);
router.get('/other_gathering_main_page', fioreController.other_gathering_main_pagepage);
router.get('/Baby_showerUpdated', fioreController.babe_shower_mainpage);
router.get('/BabyShower_Theme', fioreController.BabyShower_Themepage);
router.get('/BabyShower_food_drink', fioreController.BabyShower_food_drinkpage);
router.get('/BabyShower_gift_ideas', fioreController.BabyShower_gift_ideaspage);
router.get('/Baby_shower_photography', fioreController.Baby_shower_photographypage);
router.get('/Baby_shower_games', fioreController.Baby_shower_gamespage);
router.get('/Baby_shower_return_gift', fioreController.Baby_shower_return_giftpage);
router.get('/Gender_RevealUpdated', fioreController.Gender_RevealUpdatedpage);
router.get('/Gender_Reveal_ideas', fioreController.Gender_Reveal_ideaspage);
router.get('/Gender_Reveal_Theme', fioreController.Gender_Reveal_Themepage);
router.get('/Gender_Reveal_games', fioreController.Gender_Reveal_gamespage);
router.get('/Gender_Reveal_food_drink', fioreController.Gender_Reveal_food_drinkpage);
router.get('/Gender_Reveal_return_gift_ideas', fioreController.Gender_Reveal_return_gift_ideaspage);
router.get('/Anniversary_CelebrationUpdated', fioreController.Anniversary_CelebrationUpdatedpage);
router.get('/Anniversary_Celebration_venues', fioreController.Anniversary_Celebration_venuespage);
router.get('/Anniversary_Celebration_foods', fioreController.Anniversary_Celebration_foodspage);
router.get('/Anniversary_Celebration_entertainment', fioreController.Anniversary_Celebration_entertainmentpage);
router.get('/Anniversary_Celebration_Photography', fioreController.Anniversary_Celebration_Photographypage);
router.get('/Anniversary_Celebration_vows', fioreController.Anniversary_Celebration_vowspage);
router.get('/Anniversary_Celebration_return_gifts', fioreController.Anniversary_Celebration_return_giftspage);
router.get('/Graduation_PartiesUpdated', fioreController.Graduation_PartiesUpdatedpage);
router.get('/Graduation_Parties_Theme', fioreController.Graduation_Parties_Themepage);
router.get('/Graduation_Parties_entertainment', fioreController.Graduation_Parties_entertainmentpage);
router.get('/Graduation_Parties_memory_wall', fioreController.Graduation_Parties_memory_wallpage);
router.get('/Graduation_Parties_Catering_Dessert', fioreController.Graduation_Parties_Catering_Dessertpage);
router.get('/Graduation_Parties_return_gifts', fioreController.Graduation_Parties_return_giftspage);
router.get('/Retirement_PartiesUpdated', fioreController.Retirement_PartiesUpdatedpage);
router.get('/Retirement_Parties_tributes', fioreController.Retirement_Parties_tributespage);
router.get('/Retirement_Parties_Theme', fioreController.Retirement_Parties_Themepage);
router.get('/Retirement_Parties_entertainment', fioreController.Retirement_Parties_entertainmentpage);
router.get('/Retirement_Parties_food_drink', fioreController.Retirement_Parties_food_drinkpage);
router.get('/Retirement_Parties_Return_Gift_Ideas', fioreController.Retirement_Parties_Return_Gift_Ideaspage);
router.get('/Housewarming_PartiesUpdated', fioreController.Housewarming_PartiesUpdatedpage);
router.get('/Housewarming_Parties_welcome_ideas', fioreController.Housewarming_Parties_welcome_ideaspage);
router.get('/Housewarming_Parties_Food_Drinks_Gathering', fioreController.Housewarming_Parties_Food_Drinks_Gatheringpage);
router.get('/Housewarming_Parties_home_tour', fioreController.Housewarming_Parties_home_tourpage);
router.get('/Housewarming_Parties_return_gifts', fioreController.Housewarming_Parties_return_giftspage);
router.get('/engagements', fioreController.engagementspage);
router.get('/bride_to_be', fioreController.bride_to_bepage);
router.get('/bachelor_party', fioreController.bachelor_partypage);
router.get('/rehearsal_dinner', fioreController.rehearsal_dinnerpage);
router.get('/couple_shower', fioreController.couple_showerpage);
router.get('/mehndi_night', fioreController.mehndi_nightpage);
router.get('/marriage_proposal', fioreController.marriage_proposalpage);
router.get('/search-images', fioreController.search_imagespage);
router.get('/wedding_ceremony', fioreController.wedding_ceremonypage);
router.get('/uda-rata-wedding', fioreController.uda_rata_weddingpage);
router.get('/pahatharata-wedding', fioreController.pahatharata_weddingpage);
router.get('/western-wedding', fioreController.western_weddingpage);
router.get('/wedding_themes', fioreController.weddingThemespage);
router.get('/udarata_pre_wedding', fioreController.udarata_pre_weddingpage);
router.get('/udarata_weddingday', fioreController.udarata_weddingdaypage);
router.get('/udarata_post_wedding', fioreController.udarata_post_weddingpage);
router.get('/pahatharata_pre_wedding', fioreController.pahatharata_pre_weddingpage);
router.get('/pahatharata_post_wedding', fioreController.pahatharata_post_weddingpage);
router.get('/pahatharata_weddingday', fioreController.pahatharata_weddingdaypage);
router.get('/western_pre_wedding', fioreController.western_pre_weddingpage);
router.get('/western_weddingday', fioreController.western_weddingdaypage);
router.get('/western_post_wedding', fioreController.western_post_weddingpage);
router.get('/Indian-wedding', fioreController.indian_weddingpage);
router.get('/indian_pre_wedding', fioreController.indian_pre_weddingpage);
router.get('/indian_weddingday', fioreController.indian_weddingdaypage);
router.get('/indian_post_wedding', fioreController.indian_post_weddingpage);
router.get('/bride-welcoming', fioreController.bride_welcomingpage);
router.get('/haldi_ceremony', fioreController.haldi_ceremonypage);
router.get('/preshoot', fioreController.preshootpage);
router.get('/locations', fioreController.locationspage);
router.get('/honeymoon', fioreController.honeymoonpage);
router.get('/DubaiHoneymoon', fioreController.DubaiHoneymoonpage);
router.get('/MaldivesHoneymoon', fioreController.MaldivesHoneymoonpage);
router.get('/MalaysiaHoneymoon', fioreController.MalaysiaHoneymoonpage);
router.get('/SingaporeHoneymoon', fioreController.SingaporeHoneymoonpage);
router.get('/ThailandHoneymoon', fioreController.ThailandHoneymoonpage);
router.get('/SrilankaHoneymoon', fioreController.SrilankaHoneymoonpage);
router.get('/photo_video', fioreController.photo_videopage);
router.get('/dayafterbrunch', fioreController.dayafterbrunchpage);
router.get('/planning', fioreController.planningpage);
router.get('/After_party', fioreController.After_partypage);
router.get('/homecoming_day', fioreController.homecoming_daypage);
router.get('/homecoming_main_page', fioreController.homecoming_main_page_page);
router.get('/homecoming_planning', fioreController.homecoming_planningpage);
router.get('/homecoming_planning_Auspicious_Dates', fioreController.homecoming_planning_Auspicious_Datespage);
router.get('/homecoming_planning_guestlist_invitations', fioreController.homecoming_planning_guestlist_invitationspage);
router.get('/homecoming_planning_venue_decor', fioreController.homecoming_planning_venue_decorpage);
router.get('/homecoming_planning_dress_code_theme', fioreController.homecoming_planning_dress_code_themepage);
router.get('/homecoming_planning_entertainment', fioreController.homecoming_planning_entertainmentpage);
router.get('/homecoming_planning_photography', fioreController.homecoming_planning_photographypage);
router.get('/homecoming_planning_catering', fioreController.homecoming_planning_cateringpage);
router.get('/homecoming_planning_cake', fioreController.homecoming_planning_cakepage);
router.get('/religious_blessing', fioreController.religious_blessingpage);
router.get('/places', fioreController.placespage);
router.get('/second_reception', fioreController.second_receptionpage);
router.get('/gift_opening_party', fioreController.gift_opening_partypage);
router.get('/catering_services', fioreController.catering_servicespage);
router.get('/dancing_groups_girls', fioreController.dancing_group_girlspage);
router.get('/DJ', fioreController.DJpage);
router.get('/learn_registration', fioreController.learn_registrationpage);
router.get('/dresses', fioreController.dressespage);
router.get('/hotels', fioreController.hotelspage);
router.get('/astrologers', fioreController.astrologerspage);
router.get('/invitation_card_printers', fioreController.invitation_card_printerspage);
router.get('/link_photographers', fioreController.link_photographerspage);
router.get('/musical_band', fioreController.musical_bandpage);
router.get('/low_country_dance', fioreController.low_country_dancepage);
router.get('/kandyan_dance', fioreController.kandyan_dancepage);
router.get('/jewellary_shops', fioreController.jewellary_shopspage);
router.get('/entertainment', fioreController.entertainmentpage);
router.get('/birthday', fioreController.birthdaypage);
router.get('/deco', fioreController.decopage);
router.get('/birthday_cake', fioreController.birthday_cakepage);
router.get('/food_drinks', fioreController.food_drinkspage);
router.get('/venue', fioreController.venuepage);
router.get('/photo', fioreController.photopage);
router.get('/entertainments', fioreController.entertainmentspage);
router.get('/first_bday_bash', fioreController.first_bday_bashpage);
router.get('/magical_unicorn', fioreController.magical_unicornpage);
router.get('/teddy_bear_picnic', fioreController.teddy_bear_picnicpage);
router.get('/dinosaur_roar', fioreController.dinosaur_roarpage);
router.get('/rainbow_fun', fioreController.rainbow_funpage);
router.get('/under_sea', fioreController.under_seapage);
router.get('/superhero', fioreController.superheropage);
router.get('/space_exploration', fioreController.space_explorationpage);
router.get('/pirates_treasure', fioreController.pirates_treasurepage);
router.get('/minecraft', fioreController.minecraftpage);
router.get('/princesses', fioreController.princessespage);
router.get('/circus', fioreController.circuspage);
router.get('/glow_party', fioreController.glow_partypage);
router.get('/hollywood', fioreController.hollywoodpage);
router.get('/festival_vibes', fioreController.festival_vibespage);
router.get('/virtual', fioreController.virtualpage);
router.get('/black_gold', fioreController.black_goldpage);
router.get('/beach_party', fioreController.beach_partypage);
router.get('/casino_night', fioreController.casino_nightpage);
router.get('/wine_cheese', fioreController.wine_cheesepage);
router.get('/twentyfirst_birthday', fioreController.twentyfirst_birthdaypage);
router.get('/retro_golden', fioreController.retro_goldenpage);
router.get('/garden_hightea', fioreController.garden_highteapage);
router.get('/family_reunion', fioreController.family_reunionpage);
router.get('/cake_shop', fioreController.cake_shoppage);
router.get('/catering', fioreController.cateringpage);
router.get('/cafe', fioreController.cafepage);
router.get('/bdhotels', fioreController.bdhotelspage);
router.get('/photographer_collection', fioreController.photographer_collectionpage);
router.get('/decorators', fioreController.decoratorspage);
router.get('/Makeup_Artists', fioreController.Makeup_Artistspage);
router.get('/cake_supplier', fioreController.cake_supplierpage);
router.get('/bride_to_be_games', fioreController.bride_to_be_gamespage);
router.get('/GiftShops', fioreController.GiftShopspage);
router.get('/Bachelor_Games', fioreController.Bachelor_Gamespage);
router.get('/Liquor', fioreController.Liquorpage);
router.get('/Couple_shower_games', fioreController.Couple_shower_gamespage);
router.get('/henna-designers', fioreController.henna_designerspage);
router.get('/mehndi_traditions', fioreController.mehndi_traditionspage);
router.get('/upload', fioreController.uploadpage);

// Updated login and register routes
router.get('/login', (req, res) => {
  if (req.session.userId) {
      return res.redirect('/');
  }
  res.render('login', { error: null });
});

router.get('/register', fioreController.registerpage);
router.get('/forgot_password', fioreController.forgot_passwordpage);

// Image Upload and Analyze (POST)
router.post('/analyze', upload.single('image'), fioreController.analyzeImage);

// Authentication Routes (POST)

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
  const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already registered.');
    }

     // Do NOT hash here: let UserSchema.pre('save') handle it exactly once
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.redirect('/login');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Error registering user.');
  }
});

// Login (updated)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login attempt:', email, password); // <--- Added for debugging

    const user = await User.findOne({ email: email });

    console.log('User from database:', user); // <--- Added for debugging

    if (!user) {
      // No user with this email
      console.log('❌ No user found with this email.');
      return res.render('login', { error: 'Invalid email or password' });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    console.log('Password match:', isMatch); // <--- Added for debugging

    if (!isMatch) {
      // Passwords don't match
      console.log('❌ Passwords don’t match.');
      return res.render('login', { error: 'Invalid email or password' });
    }

    // If login success, save user ID in session
    req.session.userId = user._id;

    console.log('✅ Login successful!'); // <--- Added for debugging
    res.redirect('/'); // or wherever you want to redirect after login
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Forgot Password (POST)
router.post('/forgot_password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Generate a unique token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Save token and expiry
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:3000/reset_password/${resetToken}`;

    await sendEmail(
      user.email,
      'Password Reset Request',
      `You are receiving this email because you (or someone else) requested a password reset.\n\nPlease click this link to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.`
    );

    res.render('password_reset_sent');
  } catch (error) {
    console.error('Error during forgot password:', error);
    res.status(500).send('Error sending reset email.');
  }
});

// Password Reset Page (GET)
router.get('/reset_password/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).send('Password reset token is invalid or has expired.');
    }

    res.render('reset_password', { token });
  } catch (error) {
    console.error('Error loading reset password page:', error);
    res.status(500).send('Error accessing password reset page.');
  }
});

 // Update Password (POST)
router.post('/reset_password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).send('Password reset token is invalid or has expired.');
    }


   // Assign plain password—pre('save') will hash it once
    user.password = password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.redirect('/login');
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).send('Error resetting password.');
  }
});

module.exports = router;
