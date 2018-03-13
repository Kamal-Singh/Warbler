var db = require('../models');

exports.createMessage = function(req,res,next) {
    const newMessage = {
        text: req.body.text
    };
    db.Message.create(newMessage).then(function(message){
        return res.status(200).json(message);
    })
};

exports.fetchAllMessages = function(req,res,next) {
    db.Message.find().sort({createdAt: 'desc'})
    .then(function(message) {
        res.json(message);
    })
    .catch(function(err){
        res.status(500).json(err);
    });
}

module.exports = exports;