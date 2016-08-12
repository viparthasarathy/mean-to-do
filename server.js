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

const Todo = mongoose.model('Todo', {
  text : String
});

app.get('/apitodos', (req, res) => {
  Todo.find((err, todos) => {
    if (err) { res.send(err); }
    res.json(todos);

  });
});

app.post('/api/todos', (req, res) => {
  Todo.create({
    text : req.body.text,
    done : false
  }, function(err, todo) {
    if (err) { res.send(err); }

    Todo.find(function(err, todos) {
      if (err) { res.send(err); }
      res.json(todos);
    });
  });
});

app.delete('/api/toos/:todo_id', (req, res) => {
  Todo.remove({
    _id: req.params.todo_id
  }, (err, todo) => {
    if (err) { res.send(err); }

    Todo.find((err, todos) => {
      if (err) { res.send(err); }
      res.json(todos);
    });
  });
});

app.listen(8080, function() {
  console.log("Listening on port 8080");
});

const db = mongoose.connection;
