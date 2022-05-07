const mongoose = require('mongoose');
const reservationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Reservation", reservationSchema);