var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getAllAlbums = function(cb) {
  connection.query('SELECT * FROM KANYES', (err, results, fields) => {
    if (err) {
      console.log('ERROR:', err);
    }
    console.log('RESULTS:', results);
  });
}

getAllAlbums();

module.exports.getAllAlbums = getAllAlbums;
