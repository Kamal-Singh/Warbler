var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    helpers = require('../helpers/auth');

router.post('/signup', helpers.signup);

module.exports = router;