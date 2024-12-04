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
mongoose.connect('mongodb+srv://admin:admin@cluster0.4a5pk.mongodb.net/DB11');

const animalSchema = new mongoose.Schema({
  //data types here e.g. type:string, name:string, image:string, etc
});

const animalModel = new mongoose.model('animals', animalSchema);

//app.get('/') //home route
//app.get('/adoptable') //adoptable route
//app.get('/adoptable/delete') //delete route
//app.get('/adoptable/:id') //adoptable by id route
//app.get('/adoptable/:type') //adoptable by animal type route
//app.post('')      // add animal
//app.put('')       // update animal

