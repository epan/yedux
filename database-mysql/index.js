const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// Query format for escaping from NPM
connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

const getAllAlbums = (cb) => {
  connection.query('SELECT * FROM KANYES', (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

const addAlbum = (newAlbum, cb) => {
  console.log('STARTED addAlbum controller on:', newAlbum);
  var columns = `(era, year, description, imageUrl)`;
  var values = `('${newAlbum.name}', ${newAlbum.year}, '${newAlbum.description}', '${newAlbum.imageUrl}')`;

  console.log('SQL INSERT:', `INSERT INTO kanyes ${columns} VALUES ${values}`);

  connection.query(`INSERT INTO kanyes ${columns} VALUES ${values}`, (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

module.exports.getAllAlbums = getAllAlbums;
module.exports.addAlbum = addAlbum;
