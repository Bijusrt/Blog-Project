const express = require('express');

const router = express.Router();

router.put('/update_blog',require('../controler/put'));

module.exports = router;