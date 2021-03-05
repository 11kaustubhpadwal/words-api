require("dotenv").config();

const express = require("express");
const connectDb = require("./database/db");

const app = express();

// Connect to database
connectDb();

// Initialize middleware
app.use(express.json({ extended: false }));

// API routes
app.use("/api/words/add", require("./routes/addWords"));

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
