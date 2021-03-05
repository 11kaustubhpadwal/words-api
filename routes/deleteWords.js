const express = require("express");
const router = express.Router();

const Word = require("../models/Word");

// Delete a word
router.delete("/", async (req, res) => {
  const { wordId } = req.body;

  try {
    let wordToDelete = await Word.findOne({ _id: wordId });

    if (!wordToDelete) {
      res.status(400).json({ msg: "No such word found." });
    } else {
      await Word.findOneAndRemove({ _id: wordId });

      res.json({
        msg: `${wordToDelete} removed successfully.`,
      });
    }
  } catch (error) {
    res.status(400).json({ msg: "An error occurred. Please try again." });
  }
});

module.exports = router;
