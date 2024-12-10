// set up server on port 4000
// link to mongodb db
const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

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
//^ connect to cluster with Animals data

const animalSchema = new mongoose.Schema({
  name: String,
  animalType: String,
  age: String,
  image: String
});

const animalModel = new mongoose.model('Animals', animalSchema);
//^^ provides methods to interact with Animals collection in cluster

app.get('/api/Animals', async (req, res) => {
  const animals = await animalModel.find({});
  res.status(200).json({ animals });
  //^^ sends back json object of animals array
});

app.get('/api/animal/:id', async (req, res) => {
  let a = await animalModel.findById({_id: req.params.id });
  res.send(a);
});

app.put('/api/animal/:id', async (req, res) => {
  let a = await animalModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(a);
});

app.post('/api/Animals', async (req, res) => {
  const { name, animalType, age, image } = req.body;
  const newAnimal = new animalModel({ name, animalType, age, image });
  await newAnimal.save();
  res.status(201).json({ "message": "Animal added.", Animal: newAnimal });
  //^^ send back json data with message + animal item
});



