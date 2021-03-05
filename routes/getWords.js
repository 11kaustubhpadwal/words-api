const express = require("express");
const router = express.Router();

const Word = require("../models/Word");

// Add any word
router.get("/appearances/:wordToFind", async (req, res) => {
  const { wordToFind } = req.params;

  try {
    const result = await Word.find({ word: wordToFind });

    if (result.length > 0) {
      res.json({
        msg: `The word ${wordToFind} appears ${result.length} times in the collection.`,
      });
    } else {
      res.status(400).json({ msg: "No such word found. Please try again." });
    }
  } catch (error) {
    res.status(400).json({ msg: "An error occurred. Please try again." });
  }
});

module.exports = router;
