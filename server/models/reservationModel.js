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
})

module.exports = mongoose.model("Reservation", reservationSchema);