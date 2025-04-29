const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    url: String,
    filename: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    // required: true,
  },
});

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;
