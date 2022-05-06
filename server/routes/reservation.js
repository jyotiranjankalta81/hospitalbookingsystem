const express = require("express");
const { getAllreservation, createReservation } = require("../controllers/reservationController");
const router = express.Router();

router.route("/reservations").get(getAllreservation);
router.route("/reservation/new").post(createReservation);


module.exports = router;