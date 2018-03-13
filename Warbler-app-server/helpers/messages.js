var db = require('../models');

exports.createMessage = function(req,res,next) {
    const newMessage = {
        text: req.body.text
    };
    db.Message.create(newMessage).then(function(message){
        return res.status(200).json(message);
    })
};

module.exports = exports;