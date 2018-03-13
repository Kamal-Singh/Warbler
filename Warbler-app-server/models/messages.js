var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 150
    }
},
    { timestamps: true
});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;