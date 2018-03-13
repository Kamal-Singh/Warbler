var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 150
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{timestamps: true});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;