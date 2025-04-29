// routes/EventRoute.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const EventModel = require("../models/Event");

router.post("/addevent", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description } = req.body;

    // Cloudinary returns file info like this
    const image = req.file;

    if (!title || !date || !image) {
      return res
        .status(400)
        .json({ error: "All fields are required", success: false });
    }

    const newEvent = new EventModel({
      title,
      date,
      image: {
        url: image.path, // CloudinaryStorage sets .path as secure_url
        filename: image.filename, // Cloudinary public_id
      },
      description,
    });

    await newEvent.save();

    res.status(201).json({
      message: "Event added successfully!",
      event: newEvent,
      success: true,
    });
  } catch (error) {
    console.error("Server error during event upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
