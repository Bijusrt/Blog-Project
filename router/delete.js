const express = require('express');

const router = express.Router();

var middleware = require("../middleware/webtoken")


router.delete('/delete_blog',middleware,require('../controler/delete'));

module.exports = router;
