const express = require("express");
const addUpcomingEventModel = require("../models/AddUpcomingEvent");
const router = express.Router();
const Data = require("../models/AddUpcomingEvent");

router.post("/add-event-info", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "All fields are required", success: false });
    }

    const newUpcomingEvent = new addUpcomingEventModel({ title, description });
    await newUpcomingEvent.save();

    res.status(200).json({
      message: "Contact saved successfully",
      upcomingEvent: newUpcomingEvent,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to save contact",
    });
  }
});

router.get("/get-event-info", async (req, res) => {
  try {
    const eventData = await addUpcomingEventModel.find().sort({ _id: -1 });
    res.status(200).json({ success: true, eventData });
    // console.log(eventData);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch upcoming event data" });
  }
});

router.delete("/deleteUpcomingEvent/:id", async (req, res) => {
  const upcomingEventId = req.params.id;

  try {
    const upcomingEvent = await Data.findByIdAndDelete(upcomingEventId);

    if (!upcomingEvent) {
      return res.status(404).json({ error: "Event not found", success: false });
    }
    res
      .status(200)
      .json({ message: "Event deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
});

module.exports = router;
