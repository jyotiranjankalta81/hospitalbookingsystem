const Reservation = require("../models/reservationModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");

// create reservation
exports.createReservation = catchAsyncErrors(async (req, res, next) => {
    const reservation = await Reservation.create(req.body);

    const product = await Product.findById("62715d793d7404160480de83");
    if (reservation.room == "ICU") {
        product.ICU = product.ICU - (1 * (reservation.quantity));
        product.Ventilator = product.Ventilator - (1 * (reservation.quantity));
        product.ReclinerBed = product.ReclinerBed - (1 * (reservation.quantity));
        product.OxygenCylinder = product.NormalRoom - (1 * (reservation.quantity));
        await product.save({ validateBeforeSave: false });
    };
    if (reservation.room == "NormalRoom") {
        product.NormalRoom = product.NormalRoom - (1 * (reservation.quantity));
        product.FlatBed = product.FlatBed - (1 * (reservation.quantity));
        product.NormalMasks = product.NormalMasks - (2 * (reservation.quantity));
        await product.save({ validateBeforeSave: false });
    };
    if (reservation.room == "OxygenRoom") {
        product.OxygenRoom = product.OxygenRoom - (1 * (reservation.quantity));
        product.OxygenCylinder = product.OxygenCylinder - (2 * (reservation.quantity));
        product.ReclinerBed = product.ReclinerBed - (1 * (reservation.quantity));
        product.Nonrebreathermasks = product.Nonrebreathermasks - (2 * (reservation.quantity));
        await product.save({ validateBeforeSave: false });
    };

    console.log("ICU " + product.ICU);
    console.log("room " + reservation.room);

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