const Reservation = require("../models/reservationModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create reservation
exports.createReservation = catchAsyncErrors(async (req, res, next) => {
    const reservation = await Reservation.create(req.body);

    res.status(201).json({
        success: true,
        reservation,
    })


})

// get all reservation
exports.getAllreservation = catchAsyncErrors(async (req, res, next) => {

    const reservations = await Reservation.find();


    res.status(201).json({
        success: true,
        reservations,
    })
})