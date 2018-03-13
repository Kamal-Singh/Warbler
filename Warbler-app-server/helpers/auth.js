var db = require('../models');

exports.signup = function(req,res,next) {
    db.User.create(req.body).then(function(user){
        res.status(200).json({
            userId: user.id,
            username: user.username,
            profileImageUrl: user.profileImageUrl
        });
        }).catch(function(err){
            res.status(400).json(err);
        });
}

module.exports = exports;