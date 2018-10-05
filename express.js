const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbKey = require('./config/keys').mongoURI;
const port = process.env.PORT || 8000;
const test = require('./routes/api/test');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(dbKey, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log('Error. Check your MongoURI in ./config/keys.js!', err))

// Test Route
app.get('/', (req, res) => {
  res.json({Hello: 'World!'})
});

// API Routes
app.use('/test', test);

// Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}!`)
});
