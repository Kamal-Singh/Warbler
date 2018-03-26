var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

userSchema.pre('save', function(next) {
    let user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10).then(function(hashedPassword) {
        user.password = hashedPassword;
        next();
    }, function(err) {
        return next(err);
    });
});

userSchema.methods.comparePassword = function(password, next) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if(err) return next(err);
        return next(null, isMatch);
    });
};

var User = mongoose.model('User', userSchema);
module.exports = User;