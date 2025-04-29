const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db");
connectDB();
dotenv.config();
const cors = require("cors");

app.use(
  cors({
    origin: "https://innovixus-frontend.onrender.com", // replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Set size limits properly — and only use express built-ins
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Jai Shree Krishn");
});

const EventRoute = require("./routes/EventRoute");
const adminRoute = require("./routes/AdminRoute");
const ContactRoute = require("./routes/ContactRoute");
const upcomingEvent = require("./routes/AddUpcomingEventRoute");
const getEventData = require("./routes/GetEventRoute");
const getEventDeleteData = require("./routes/EventDeleteRoute");

app.use("/", EventRoute);
app.use("/", adminRoute);
app.use("/", ContactRoute);
app.use("/", upcomingEvent);
app.use("/", getEventData);
app.use("/", getEventDeleteData);

app.listen(PORT, () => {
  console.log(`App is successfully running on port ${PORT}`);
});
