const knex = require('knex');

const config = require('./knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.staging);

function findinstUser(id){
    db('user').where({id: id}).first();

}

function saveLocation(locationInfo) {
    db('triplog').returning(['id']).insert([locationInfo]);
}

module.exports = {findinstUser, saveLocation}
