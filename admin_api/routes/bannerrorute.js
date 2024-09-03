// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {createBanner,deletebanner,listbanner} = require('../controllers/bannercontroller');

router.post('/banner',createBanner);

router.delete('/banner/:Id', deletebanner ); 

router.get('/banner',listbanner)

module.exports = router;
