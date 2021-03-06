var express = require('express');
var router = express.Router({mergeParams: true});
var helpers = require('../helpers/messages.js');

router.post('/', helpers.createMessage);

router.get('/', helpers.fetchAllMessages);

module.exports = router;