const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/people'; 
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Mongoose Schema and Model
const personSchema = new mongoose.Schema({
  fname: String,
  mname: String,
  lname: String,
  gender: Number,
  idType: Number,
  id: String,
  occupation: String,
  workat: String,
  state: String,
  city: String,
  address: String,
  zip: String,
  email: String,
  phones: [
    {
      type: Number,
      num: String,
      note: String,
    },
  ],
  notes: String,
  addDate: String,
  addedBy: String,
});

const Person = mongoose.model('Person', personSchema);

// Routes
app.post('/api/people', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save person', error: err });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
