const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain'
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {  //needs to be calculated, so need to create a service function for it
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'accepted', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    paymentID: {
        type: String
    },
    orderID: {
        type: String
    },
    signature: {
        type: String
    }
})

module.exports = mongoose.model('ride', rideSchema)