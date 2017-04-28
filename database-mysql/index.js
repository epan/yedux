var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getAllAlbums = function(cb) {
  connection.query('SELECT * FROM KANYES', (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

module.exports.getAllAlbums = getAllAlbums;
