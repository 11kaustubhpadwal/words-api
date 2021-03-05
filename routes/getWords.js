const express = require("express");
const router = express.Router();

const Word = require("../models/Word");

// Get the number of appearances of a word
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

// Get all distinct words
router.get("/unique", (req, res) => {
  Word.distinct("word", function (err, result) {
    if (err) {
      res.status(400).json({ msg: "An error occurred. Please try again." });
    } else {
      res.json({
        uniqueWords: result,
      });
    }
  });
});

module.exports = router;
