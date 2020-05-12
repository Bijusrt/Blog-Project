const express = require('express');

const router = express.Router();

router.post('/signup',require('../controler/signup'));

module.exports = router;
