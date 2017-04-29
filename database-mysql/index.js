const mysqlConfig = require('./config.js');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    charset: 'utf8',
    database: 'yedux'
  }
});

const getAllAlbums = function() {
  knex.select().from('kanyes')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error('getAllAlbums', err);
  });
}

getAllAlbums();

module.exports.getAllAlbums = getAllAlbums;
