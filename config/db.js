const mongoose = require('mongoose');

const dbURI =
  // 'mongodb+srv://domask:5426338@cluster0.urky3.mongodb.net/data?retryWrites=true&w=majority'
  'mongodb+srv://Domask:5426338@cluster0.1muug.mongodb.net/data?retryWrites=true&w=majority'

const options = {
  poolSize: 10,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Establishing connectin with dbURI and option with max pool

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log('Error connecting Database instance due to: ', err);
  }
);

// require any models
require('../models/Task');
