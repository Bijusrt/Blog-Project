const express = require('express');

const router = express.Router();

var middleware = require("../middleware/webtoken")

router.get('/all',middleware,require('../controler/get').getAll);

router.get('/:author',require('../controler/get').getAuthor);

module.exports = router;