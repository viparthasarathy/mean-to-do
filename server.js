const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb://viparthasarathy:thisismydb@jello.modulusmongo.net:27017/ba5bihaW');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(8080, function() {
  console.log("Listening on port 8080");
});

const db = mongoose.connection;
