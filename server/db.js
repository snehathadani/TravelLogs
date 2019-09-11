const knex = require('knex');

const config = require('./knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.staging);

// export for use in codebase
module.exports = db;


 function findinstUser(id){
    db('user').where({id: id}).first();
}