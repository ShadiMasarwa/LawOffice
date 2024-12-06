const express = require("express");
const Person = require("../Models/models");
const router = express.Router();

// POST route to create a person
router.post("/", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(500).json({ message: "Failed to save person", error: err });
  }
});

module.exports = router;
