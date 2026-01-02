const express = require('express');
const router = express.Router();
const fioreController = require('../controllers/fioreController');

/** 
 *  App Routes
*/
router.get('/', fioreController.homepage);
router.get('/weddings', fioreController.weddingspage);
router.get('/birthday-parties', fioreController.birthdaypartiespage);
router.get('/other-gatherings', fioreController.othergatheringspage);



module.exports = router;
