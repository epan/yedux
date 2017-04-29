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

const getAllAlbums = (cb) => {
  knex.select().from('kanyes')
    .then((data) => { cb(null, data) })
    .catch((err) => { cb(err, null) });
}

module.exports.getAllAlbums = getAllAlbums;
