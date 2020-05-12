const express = require('express');

const router = express.Router();

router.post('/login',require('../controler/login'));

module.exports = router;