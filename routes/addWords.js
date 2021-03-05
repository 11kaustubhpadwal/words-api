const express = require("express");
const router = express.Router();

const Word = require("../models/Word");

// Add any word
router.post("/", async (req, res) => {
  const { wordToAdd } = req.body;

  try {
    if (wordToAdd !== "") {
      let newWord = new Word({
        word: wordToAdd,
      });

      await newWord.save();

      res.json({ msg: `${newWord} has been added successfully.` });
    } else {
      res
        .status(400)
        .json({ msg: "No string found. Please type something and try again." });
    }
  } catch (error) {
    res.status(400).json({ msg: "An error occurred. Please try again." });
  }
});

module.exports = router;
