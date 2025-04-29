const express = require("express");
const router = express.Router();
const EventModel = require("../models/Event");
const upload = require("../middleware/upload");
const cloudinary = require("../Cloudinary");
const fs = require("fs");

router.post("/addevent", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file || !title || !date) {
      return res
        .status(400)
        .json({ error: "All fields are required", success: false });
    }

    // ✅ Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "innovixus_events",
    });

    // ✅ Remove local file
    fs.unlinkSync(req.file.path);

    // ✅ Save image details in DB
    const newEvent = new EventModel({
      title,
      date,
      image: {
        url: result.secure_url,
        filename: result.public_id,
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
    console.log(error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
});

module.exports = router;
