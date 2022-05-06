const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    NormalRoom: {
        type: Number,
        required: [true, "Please Enter the NormalRoom count "],
        maxLength: [4, "Room count can't be exceed 4 characters"]
    },
    OxygenRoom: {
        type: Number,
        required: [true, "Please Enter the OxygenRoom count "],
        maxLength: [4, "Room count can't be exceed 4 characters"]
    },
    ICU: {
        type: Number,
        required: [true, "Please Enter the ICU count "],
        maxLength: [4, "ICU count can't be exceed 4 characters"]
    },
    FlatBeds: {
        type: Number,
        required: [true, "Please Enter the Flatbeds count "],
        maxLength: [4, "flatbeds count can't be exceed 4 characters"]
    },
    ReclinerBeds: {
        type: Number,
        required: [true, "Please Enter the ReclinerBeds count "],
        maxLength: [4, "Recliner count can't be exceed 4 characters"]
    },
    Ventilator: {
        type: Number,
        required: [true, "Please Enter the Ventilator count "],
        maxLength: [4, "Ventilator count can't be exceed 4 characters"]
    },
    OxygenCylinder: {
        type: Number,
        required: [true, "Please Enter the OxygenCylinder count "],
        maxLength: [4, "OxygenCylinder count can't be exceed 4 characters"]
    },
    NormalMasks: {
        type: Number,
        required: [true, "Please Enter the NormalMask count "],
        maxLength: [4, "NormalMask count can't be exceed 4 characters"]
    },
    Nonrebreathermasks: {
        type: Number,
        required: [true, "Please Enter the Nonrebreathermasks count "],
        maxLength: [4, "Nonrebreathermasks count can't be exceed 4 characters"]
    },
});

module.exports = mongoose.model("Product", productSchema);