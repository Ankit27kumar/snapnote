const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "hello";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  journal: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
});

const notesSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Admin = mongoose.model('Admin', adminSchema);
const Note = mongoose.model('Note', notesSchema);

mongoose.connect('mongodb+srv://2022007381ankit:JsFPxJpBJV0zUEd2@cluster0.etoup5d.mongodb.net/snapnote').then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(403).json({ message: 'Admin already exists' });
    }
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Admin created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating admin' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

app.post('/note', authenticateJwt, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save();
    
    const admin = await Admin.findOne({ username: req.user.username });
    if (admin) {
      admin.journal.push(newNote);
      await admin.save();
      res.status(200).json(newNote);
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating note' });
  }
});

app.get('/getnote', authenticateJwt, async (req, res) => {
  try {
    const user = req.user.username;
    const admin = await Admin.findOne({ username: user }).populate('journal');
    const journal = admin.journal;
    res.json({ journal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting notes' });
  }
});

app.delete("/delete/:noteId", authenticateJwt, async (req, res) => {
  try {
    const noteId = req.params.noteId;
    await Note.deleteOne({ _id: noteId });
    console.log('Note deleted successfully');
    res.status(200).send('Note deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting note');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
