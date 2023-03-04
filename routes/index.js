const express       = require('express');
const router        = express.Router();
const tool          = require('toolify');

let mw = require('../middleware');

const pageController  = require('../controllers/pageController');
router.get('*', [mw.local_data], pageController.index);

module.exports = router;