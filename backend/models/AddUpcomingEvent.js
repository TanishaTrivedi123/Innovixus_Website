const mongoose = require("mongoose");

const addUpcomingEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const addUpcomingEventModel = mongoose.model("Data", addUpcomingEventSchema);

module.exports = addUpcomingEventModel;
