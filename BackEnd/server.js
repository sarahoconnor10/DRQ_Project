const express = require('express');
const app = express();
const port = 4000;

//Middleware for cross-origin requests
const cors = require('cors');
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//Adding headers for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.4a5pk.mongodb.net/DB2');
//^ Connect to cluster with Animals data

const animalSchema = new mongoose.Schema({
  name: String,
  animalType: String,
  age: String,
  description: String,
  image: String
});

const animalModel = new mongoose.model('Animals', animalSchema);

// Endpoint to fetch all animals
app.get('/api/Animals', async (req, res) => {
  const animals = await animalModel.find({});
  res.status(200).json({ animals });
});

// Endpoint to fetch by ID
app.get('/api/Animals/:id', async (req, res) => {
  let a = await animalModel.findById(req.params.id);
  res.json(a);
});

// Endpoint to update by ID
app.put('/api/Animals/:id', async (req, res) => {
  let a = await animalModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(a);
});

// Endpoint to delete by ID
app.delete('/api/Animals/:id', async (req, res) => {
  console.log("Deleting animal with ID: " + req.params.id);
  const a = await animalModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Animal deleted successfully", a});
});

// Endpoint to add new animal to DB
app.post('/api/Animals', async (req, res) => {
  const { name, animalType, age, description, image } = req.body;
  const newAnimal = new animalModel({ name, animalType, age, description, image });
  await newAnimal.save();
  res.status(201).json({ "message": "Animal added.", Animal: newAnimal });
});



