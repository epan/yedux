var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../database-mysql');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/albums', (req, res) => {
  db.getAllAlbums((err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/albums', (req, res) => {
  db.addAlbum(req.body, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
