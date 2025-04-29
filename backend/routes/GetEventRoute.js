const express = require("express");
const router = express.Router();
const EventModel = require("../models/Event");

router.get("/getEvent", async (req, res) => {
  try {
    const events = await EventModel.find().sort({ date: -1 });

    return res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

module.exports = router;
