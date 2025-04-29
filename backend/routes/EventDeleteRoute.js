const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const cloudinary = require("../Cloudinary"); // Make sure this is correct

router.delete("/deleteEvent/:id", async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    // Delete image from Cloudinary if it exists
    if (event.image && event.image.filename) {
      await cloudinary.uploader.destroy(event.image.filename);
    }

    // Delete event from database
    await Event.findByIdAndDelete(eventId);

    res
      .status(200)
      .json({ success: true, message: "Event and image deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
