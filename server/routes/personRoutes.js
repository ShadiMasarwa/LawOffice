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

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch persons", error: err });
  }
});

module.exports = router;
