const axios = require('axios');
const fs = require('fs');
require('dotenv').config();


exports.homepage = (req, res) => {
  if (!req.session.userId) {
      return res.redirect('/login');
  }
  res.render('index');
};
// Weddings page
exports.weddingspage = async (req, res) => {
  res.render('weddings');
};

// Birthday Parties page
exports.birthdaypartiespage = async (req, res) => {
  res.render('birthday-parties');
};

// Other Gatherings page
exports.othergatheringspage = async (req, res) => {
  res.render('other-gatherings');
};
exports.other_gathering_main_pagepage = async (req, res) => {
  res.render('other_gathering_main_page');
};
exports.babe_shower_mainpage = async (req, res) => {
  res.render('Baby_showerUpdated');
};
exports.BabyShower_Themepage = async (req, res) => {
  res.render('BabyShower_Theme');
};
exports.BabyShower_food_drinkpage = async (req, res) => {
  res.render('BabyShower_food_drink');
}
exports.BabyShower_gift_ideaspage = async (req, res) => {
  res.render('BabyShower_gift_ideas');
}
exports.Baby_shower_photographypage = async (req, res) => {
  res.render('Baby_shower_photography');
}
exports.Baby_shower_gamespage = async (req, res) => {
  res.render('Baby_shower_games');
}
exports.Baby_shower_return_giftpage = async (req, res) => {
  res.render('Baby_shower_return_gift');
}
exports.Gender_RevealUpdatedpage = async (req, res) => {
  res.render('Gender_RevealUpdated');
}
exports.Gender_Reveal_ideaspage = async (req, res) => {
  res.render('Gender_Reveal_ideas');
}
exports.Gender_Reveal_Themepage = async (req, res) => {
  res.render('Gender_Reveal_Theme');
}
exports.Gender_Reveal_gamespage = async (req, res) => {
  res.render('Gender_Reveal_games');
}
exports.Gender_Reveal_food_drinkpage = async (req, res) => {
  res.render('Gender_Reveal_food_drink');
}
exports.Gender_Reveal_return_gift_ideaspage = async (req, res) => {
  res.render('Gender_Reveal_return_gift_ideas');
}
exports.Anniversary_CelebrationUpdatedpage = async (req, res) => {
  res.render('Anniversary_CelebrationUpdated');
}
exports.Anniversary_Celebration_venuespage = async (req, res) => {
  res.render('Anniversary_Celebration_venues');
}
exports.Anniversary_Celebration_foodspage = async (req, res) => {
  res.render('Anniversary_Celebration_foods');
}
exports.Anniversary_Celebration_entertainmentpage = async (req, res) => {
  res.render('Anniversary_Celebration_entertainment');
}
exports.Anniversary_Celebration_Photographypage = async (req, res) => {
  res.render('Anniversary_Celebration_Photography');
}
exports.Anniversary_Celebration_vowspage = async (req, res) => {
  res.render('Anniversary_Celebration_vows');
}
exports.Anniversary_Celebration_return_giftspage = async (req, res) => {
  res.render('Anniversary_Celebration_return_gifts');
}
exports.Graduation_PartiesUpdatedpage = async (req, res) => {
  res.render('Graduation_PartiesUpdated');
}
exports.Graduation_Parties_Themepage = async (req, res) => {
  res.render('Graduation_Parties_Theme');
}
exports.Graduation_Parties_entertainmentpage = async (req, res) => {
  res.render('Graduation_Parties_entertainment');
}
exports.Graduation_Parties_memory_wallpage = async (req, res) => {
  res.render('Graduation_Parties_memory_wall');
}
exports.Graduation_Parties_Catering_Dessertpage = async (req, res) => {
  res.render('Graduation_Parties_Catering_Dessert');
}
exports.Graduation_Parties_return_giftspage = async (req, res) => {
  res.render('Graduation_Parties_return_gifts');
}
exports.Retirement_PartiesUpdatedpage = async (req, res) => {
  res.render('Retirement_PartiesUpdated');
}
exports.Retirement_Parties_tributespage = async (req, res) => {
  res.render('Retirement_Parties_tributes');
}
exports.Retirement_Parties_Themepage = async (req, res) => {
  res.render('Retirement_Parties_Theme');
}
exports.Retirement_Parties_entertainmentpage = async (req, res) => {
  res.render('Retirement_Parties_entertainment');
}
exports.Retirement_Parties_food_drinkpage = async (req, res) => {
  res.render('Retirement_Parties_food_drink');
}
exports.Retirement_Parties_Return_Gift_Ideaspage = async (req, res) => {
  res.render('Retirement_Parties_Return_Gift_Ideas');
}
exports.Housewarming_PartiesUpdatedpage = async (req, res) => {
  res.render('Housewarming_PartiesUpdated');
}
exports.Housewarming_Parties_welcome_ideaspage = async (req, res) => {
  res.render('Housewarming_Parties_welcome_ideas');
}
exports.Housewarming_Parties_Food_Drinks_Gatheringpage = async (req, res) => {
  res.render('Housewarming_Parties_Food_Drinks_Gathering');
}
exports.Housewarming_Parties_home_tourpage = async (req, res) => {
  res.render('Housewarming_Parties_home_tour');
}
exports.Housewarming_Parties_return_giftspage = async (req, res) => {
  res.render('Housewarming_Parties_return_gifts');
}

// Engagements page
exports.engagementspage = (req, res) => {
  res.render('engagements');
};

// Bride To Be page
exports.bride_to_bepage = (req, res) => {
  res.render('bride_to_be');
};

// Bachelor Party page
exports.bachelor_partypage = (req, res) => {
  res.render('bachelor_party');
};

// Rehearsal Dinner page
exports.rehearsal_dinnerpage = (req, res) => {
  res.render('rehearsal_dinner');
};

// Couple Shower page
exports.couple_showerpage = (req, res) => {
  res.render('couple_shower');
};

// Mehndi Night page
exports.mehndi_nightpage = (req, res) => {
  res.render('mehndi_night');
};

// Marriage Proposal page
exports.marriage_proposalpage = (req, res) => {
  res.render('marriage_proposal');
};

// wedding_ceremony page
exports.wedding_ceremonypage = (req, res) => {
  res.render('wedding_ceremony');
};


// uda-rata-wedding page
exports.uda_rata_weddingpage = (req, res) => {
  res.render('uda-rata-wedding');
};

// udarata_pre_wedding page
exports.udarata_pre_weddingpage = (req, res) => {
  res.render('udarata_pre_wedding');
};

// udarata_post_wedding page
exports.udarata_post_weddingpage = (req, res) => {
  res.render('udarata_post_wedding');
};

// udarata_weddingday page
exports.udarata_weddingdaypage = (req, res) => {
  res.render('udarata_weddingday');
};

// pahatharata-wedding page
exports.pahatharata_weddingpage = (req, res) => {
  res.render('pahatharata-wedding');
};


// pahatharata_post_wedding page
exports.pahatharata_post_weddingpage = (req, res) => {
  res.render('pahatharata_post_wedding');
};


// pahatharata_pre_wedding page
exports.pahatharata_pre_weddingpage = (req, res) => {
  res.render('pahatharata_pre_wedding');
};

// pahatharata_weddingday page
exports.pahatharata_weddingdaypage = (req, res) => {
  res.render('pahatharata_weddingday');
};

// western-wedding page
exports.western_weddingpage = (req, res) => {
  res.render('western-wedding');
};

// western_weddingday page
exports.western_weddingdaypage = (req, res) => {
  res.render('western_weddingday');
};

// western_pre_wedding page
exports.western_pre_weddingpage = (req, res) => {
  res.render('western_pre_wedding');
};

// western_weddingday page
exports.western_post_weddingpage = (req, res) => {
  res.render('western_post_wedding');
};

// western-wedding page
exports.indian_weddingpage = (req, res) => {
  res.render('Indian-wedding');
};

// indian_weddingday page
exports.indian_weddingdaypage = (req, res) => {
  res.render('indian_weddingday');
};

// indian_post_wedding page
exports.indian_post_weddingpage = (req, res) => {
  res.render('indian_post_wedding');
};

// indian_pre_wedding page
exports.indian_pre_weddingpage = (req, res) => {
  res.render('indian_pre_wedding');
};


exports.faqpage = (req, res) => {
  res.render('faq');
};

exports.termspage = (req, res) => {
  res.render('terms');
};

// Search Images page
exports.search_imagespage = (req, res) => {
  res.render('search_images');
};

// Upload page (initial render)
exports.uploadpage = (req, res) => {
  res.render('upload', { description: null, similarImages: [] });
};

// Analyze uploaded image (AI description + show similar images)
exports.analyzeImage = async (req, res) => {
  const imagePath = req.file.path;

  try {
    const description = await analyzeImageWithHuggingFace(imagePath);

    // Dummy similar images (you can later make this dynamic)
    const similarImages = [
      '/img/similar1.jpg',
      '/img/similar2.jpg',
      '/img/similar3.jpg',
    ];

    res.render('upload', {
      description: description || 'No description found',
      similarImages
    });
  } catch (error) {
    console.error('Error analyzing image:', error);
    res.render('upload', {
      description: 'Error analyzing image',
      similarImages: [
        '/img/similar1.jpg',
        '/img/similar2.jpg',
        '/img/similar3.jpg',
      ]
    });
  }
};

// Helper function to call HuggingFace API
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
    console.error('Error from HuggingFace API:', error.response?.data || error.message);
    return 'Error analyzing image';
  }
}


// Login page
exports.loginpage = (req, res) => {
  res.render('login', { error: null }); // Pass error as null
};

// Register page
exports.registerpage = (req, res) => {
  res.render('register');
};

// Forgot-password page
exports.forgot_passwordpage = (req, res) => {
  res.render('forgot_password');
};

exports.weddingThemespage = (req, res) => {

  const AutumnItems = [
    { src: '/img/attt (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/attt (15).jpg', alt: 'Rustic tablescape' },
    
    
    // add more gallery items here
  ];

  const BeachItems = [
    { src: '/img/beacher (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/beacher (15).jpg', alt: 'Rustic tablescape' },
    
    // add more gallery items here
  ];

  const ChurchItems = [
    { src: '/img/catholich (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/catholich (15).jpg', alt: 'Rustic tablescape' },
    
    
    // add more gallery items here
  ];

  const ClassELindItems = [
    { src: '/img/classindianelegant (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianelegant (15).jpg', alt: 'Rustic tablescape' },
    
    
    // add more gallery items here
  ];

  const ClassROindItems = [
    { src: '/img/classicindianromance (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classicindianromance (15).jpg', alt: 'Rustic tablescape' },
    
    
    // add more gallery items here
  ];

  const ClassVIindItems = [
    { src: '/img/classindianvintage (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classindianvintage (15).jpg', alt: 'Rustic tablescape' },
    
    
    // add more gallery items here
  ];

  const ClassELsriItems = [
    { src: '/img/classsrilankaelegant (1).jpeg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (2).jpeg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrilankaelegant (13).jpg', alt: 'Rustic tablescape' },
    
    
    // add more gallery items here
  ];

  const ClassVIsriItems = [
    { src: '/img/classsrivintage (1).jpeg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/classsrivintage (13).jpg', alt: 'Rustic tablescape' },

    
    
    // add more gallery items here
  ];


  const  ClassELwesItems = [
    { src: '/img/wesel (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesel (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  ClassROwesItems = [
    { src: '/img/wesro (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesro (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  ClassVIwesItems = [
    { src: '/img/wesvin (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/wesvin (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  EcogreenItems = [
    { src: '/img/ecogreen (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecogreen (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  EcowoodItems = [
    { src: '/img/ecowood (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/ecowood (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  FairyItems = [
    { src: '/img/fairypics (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/fairypics (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  IndiancultItems = [
    { src: '/img/indianclt (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/indianclt (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  IslandItems = [
    { src: '/img/islandpic (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/islandpic (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  ModernBoheItems = [
    { src: '/img/modbohepics (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modbohepics (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  ModernLuxItems = [
    { src: '/img/modluxpics (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/modluxpics (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  SricultItems = [
    { src: '/img/slcltpics (1).jpeg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/slcltpics (1).jpeg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  WesternCultItems = [
    { src: '/img/westclt (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/westclt (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  FlightItems = [
    { src: '/img/flightpics (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/flightpics (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];

  const  ShipItems = [
    { src: '/img/shipics (1).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (2).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (3).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (4).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (5).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (6).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (7).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (8).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (9).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (10).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (11).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (12).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (13).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (14).jpg', alt: 'Rustic tablescape' },
    { src: '/img/shipics (15).jpg', alt: 'Rustic tablescape' },
    

       // add more gallery items here
  ];



  res.render('wedding_themes', { AutumnItems, BeachItems, ChurchItems, ClassELindItems,
  ClassROindItems, ClassVIindItems, ClassELsriItems, ClassVIsriItems, ClassELwesItems, ClassROwesItems,
  ClassVIwesItems, EcogreenItems, EcowoodItems, FairyItems, IndiancultItems, IslandItems, ModernBoheItems,
  ModernLuxItems, SricultItems, WesternCultItems, FlightItems, ShipItems});
};

// bride welcome page
exports.bride_welcomingpage = (req, res) => {
  res.render('bride-welcoming');
};

// Haldi page
exports.haldi_ceremonypage = (req, res) => {
  res.render('haldi_ceremony');
};

// preshoot page
exports.preshootpage = (req, res) => {
  res.render('preshoot');
};

// preshoot location page
exports.locationspage = (req, res) => {
  res.render('locations');
};

// honey moon page
exports.honeymoonpage = (req, res) => {
  res.render('honeymoon');
};

exports.DubaiHoneymoonpage = (req, res) => {
  res.render('DubaiHoneymoon');
};

exports.MaldivesHoneymoonpage = (req, res) => {
  res.render('MaldivesHoneymoon');
};
exports.MalaysiaHoneymoonpage = (req, res) => {
  res.render('MalaysiaHoneymoon');
};
exports.SingaporeHoneymoonpage = (req, res) => {
  res.render('SingaporeHoneymoon');
};
exports.SrilankaHoneymoonpage = (req, res) => {
  res.render('SrilankaHoneymoon');
};
exports.ThailandHoneymoonpage = (req, res) => {
  res.render('ThailandHoneymoon');
};

//photo video page
exports.photo_videopage = (req, res) => {
  res.render('photo_video');
};

//day after brunch page
exports.dayafterbrunchpage = (req, res) => {
  res.render('dayafterbrunch');
};

exports.planningpage = (req, res) => {
  res.render('planning');
};

//after party page
exports.After_partypage = (req, res) => {
  res.render('After_party');
};

//homecoming day page
exports.homecoming_daypage = (req, res) => {
  res.render('homecoming_day');
};
//homecoming main page
exports.homecoming_main_page_page = (req, res) => {
  res.render('homecoming_main_page');
};
//homecoming planning page
exports.homecoming_planningpage = (req, res) => {
  res.render('homecoming_planning');
};
//homecoming auspiciousdate page
exports.homecoming_planning_Auspicious_Datespage = (req, res) => {
  res.render('homecoming_planning_Auspicious_Dates');
};
//homecoming guest invitations page
exports.homecoming_planning_guestlist_invitationspage = (req, res) => {
  res.render('homecoming_planning_guestlist_invitations');
};

//homecoming ven and decor page
exports.homecoming_planning_venue_decorpage = (req, res) => {
  res.render('homecoming_planning_venue_decor');
};

//homecoming dress code and theme page
exports.homecoming_planning_dress_code_themepage = (req, res) => {
  res.render('homecoming_planning_dress_code_theme');
};

//homecoming entertainment page
exports.homecoming_planning_entertainmentpage = (req, res) => {
  res.render('homecoming_planning_entertainment');
};

//homecoming photograph page
exports.homecoming_planning_photographypage = (req, res) => {
  res.render('homecoming_planning_photography');
};
//homecoming catering page
exports.homecoming_planning_cateringpage = (req, res) => {
  res.render('homecoming_planning_catering');
};

//homecoming cake page
exports.homecoming_planning_cakepage = (req, res) => {
  res.render('homecoming_planning_cake');
};

//religious blessings page
exports.religious_blessingpage = (req, res) => {
  res.render('religious_blessing');
};
exports.placespage = (req, res) => {
  res.render('places');
};
//gift_opening_party
exports.gift_opening_partypage = (req, res) => {
  res.render('gift_opening_party');
};
//second_reception
exports.second_receptionpage = (req, res) => {
  res.render('second_reception');
};
//catering
exports.catering_servicespage = (req, res) => {
  res.render('catering_services');
};
//dancing girls
exports.dancing_group_girlspage = (req, res) => {
  res.render('dancing_groups_girls');
};
//dj page
exports.DJpage = (req, res) => {
  res.render('DJ');
};
//entertainment page
exports.entertainmentpage = (req, res) => {
  res.render('entertainment');
};
//jewellary page
exports.jewellary_shopspage = (req, res) => {
  res.render('jewellary_shops');
};
//kandyan dance page
exports.kandyan_dancepage = (req, res) => {
  res.render('kandyan_dance');
};
//low_country_dance
exports.low_country_dancepage = (req, res) => {
  res.render('low_country_dance');
};
//musical_band
exports.musical_bandpage = (req, res) => {
  res.render('musical_band');
};
//link_photographers
exports.link_photographerspage = (req, res) => {
  res.render('link_photographers');
};
//astrologers
exports.astrologerspage = (req, res) => {
  res.render('astrologers');
};
//invitation_card_printers
exports.invitation_card_printerspage = (req, res) => {
  res.render('invitation_card_printers');
};
//hotels
exports.hotelspage = (req, res) => {
  res.render('hotels');
};
//dresses
exports.dressespage = (req, res) => {
  res.render('dresses');
};
//learn_registration
exports.learn_registrationpage = (req, res) => {
  res.render('learn_registration');
};

// birthday page
exports.birthdaypage = (req, res) => {
  res.render('birthday');
};

// deco page
exports.decopage = (req, res) => {
  res.render('deco');
};

// birthday_cake page
exports.birthday_cakepage = (req, res) => {
  res.render('birthday_cake');
};

// food_drinks page
exports.food_drinkspage = (req, res) => {
  res.render('food_drinks');
};

// venue page
exports.venuepage = (req, res) => {
  res.render('venue');
};

// photo page
exports.photopage = (req, res) => {
  res.render('photo');
};

// entertainments page
exports.entertainmentspage = (req, res) => {
  res.render('entertainments');
};



exports.first_bday_bashpage = (req, res) => {
  res.render('first_bday_bash');
}; 

exports.magical_unicornpage = (req, res) => {
  res.render('magical_unicorn');
}; 

exports.teddy_bear_picnicpage = (req, res) => {
  res.render('teddy_bear_picnic');
}; 

exports.dinosaur_roarpage = (req, res) => {
  res.render('dinosaur_roar');
}; 

exports.rainbow_funpage = (req, res) => {
  res.render('rainbow_fun');
}; 

exports.under_seapage = (req, res) => {
  res.render('under_sea');
}; 

exports.superheropage = (req, res) => {
  res.render('superhero');
}; 

exports.space_explorationpage = (req, res) => {
  res.render('space_exploration');
}; 

exports.pirates_treasurepage = (req, res) => {
  res.render('pirates_treasure');
}; 

exports.minecraftpage = (req, res) => {
  res.render('minecraft');
}; 

exports.princessespage = (req, res) => {
  res.render('princesses');
}; 

exports.circuspage = (req, res) => {
  res.render('circus');
}; 

exports.glow_partypage = (req, res) => {
  res.render('glow_party');
}; 

exports.hollywoodpage = (req, res) => {
  res.render('hollywood');
}; 

exports.festival_vibespage = (req, res) => {
  res.render('festival_vibes');
}; 

exports.virtualpage = (req, res) => {
  res.render('virtual');
}; 

exports.black_goldpage = (req, res) => {
  res.render('black_gold');
}; 

exports.beach_partypage = (req, res) => {
  res.render('beach_party');
}; 

exports.casino_nightpage = (req, res) => {
  res.render('casino_night');
}; 

exports.wine_cheesepage = (req, res) => {
  res.render('wine_cheese');
}; 

exports.twentyfirst_birthdaypage = (req, res) => {
  res.render('twentyfirst_birthday');
}; 

exports.retro_goldenpage = (req, res) => {
  res.render('retro_golden');
}; 

exports.garden_highteapage = (req, res) => {
  res.render('garden_hightea');
}; 

exports.family_reunionpage = (req, res) => {
  res.render('family_reunion');
}; 

exports.cake_shoppage = (req, res) => {
  res.render('cake_shop');
}; 

exports.cateringpage = (req, res) => {
  res.render('catering');
}; 

exports.cafepage = (req, res) => {
  res.render('cafe');
}; 

exports.bdhotelspage = (req, res) => {
  res.render('bdhotels');
}; 

exports.photographer_collectionpage = (req, res) => {
  res.render('photographer_collection');
}; 

exports.decoratorspage = (req, res) => {
  res.render('decorators');
}; 

exports.Makeup_Artistspage = (req, res) => {
  res.render('Makeup_Artists');
};

exports.cake_supplierpage = (req, res) => {
  res.render('cake_supplier');
};
exports.bride_to_be_gamespage = (req, res) => {
  res.render('bride_to_be_games');
};
exports.GiftShopspage = (req, res) => {
  res.render('GiftShops');
};
exports.Bachelor_Gamespage = (req, res) => {
  res.render('Bachelor_Games');
};
exports.Liquorpage = (req, res) => {
  res.render('Liquor');
};
exports.Couple_shower_gamespage = (req, res) => {
  res.render('Couple_shower_games');
};
exports.henna_designerspage = (req, res) => {
  res.render('henna-designers');
};
exports.mehndi_traditionspage = (req, res) => {
  res.render('mehndi_traditions');
};



