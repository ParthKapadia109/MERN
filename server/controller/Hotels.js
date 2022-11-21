const Hotel = require("../model/Hotel");

// create
exports.createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res
      .status(201)
      .json({ success: true, hotel, message: "Successfully hotel created" });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

// UPDATE
exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(201)
      .json({ success: true, hotel, message: "Successfully hotel updated" });
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

// DELETE
exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Successfully hotel deleted" });
  } catch (error) {
    res.json
    process.exit();
  }
};

// GET BY ID
exports.getHotel = async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res
        .status(200)
        .json({ success: true, hotel });
    } catch (error) {
      console.log(error);
      process.exit();
    }
  };

// GET ALL
exports.Hotels = async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res
        .status(200)
        .json({ success: true, hotels });
    } catch (error) {
      console.log(error);
      process.exit();
    }
  };
