const express = require('express')
const { createHotel, updateHotel, deleteHotel, getHotel, Hotels } = require('../controller/Hotels')

const router = express.Router()

router.route("/createhotel").post(createHotel)
router.route("/:id").put(updateHotel)
router.route("/:id").delete(deleteHotel)
router.route("/:id").get(getHotel)
router.route("/").get(Hotels)

module.exports = router