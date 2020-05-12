const express = require('express');

const router = express.Router();

router.post('/create_blog',require('../controler/post'));

module.exports = router;