const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-mysql');
const morgan = require('morgan');

const app = express();

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
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
