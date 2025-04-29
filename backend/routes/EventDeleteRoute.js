const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.delete("/deleteEvent/:id", async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findByIdAndDelete(eventId); //Delete event bu ID

    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "server error" });
  }
});
module.exports = router;
