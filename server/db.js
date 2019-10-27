const knex = require('knex');

const config = require('./knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.staging);

function findinstUser(id){
    db('user').where({id: id}).first();

}

async function addUser(userInfo) {
    console.log("addUSer", userInfo)
    await db('user').insert(userInfo).returning('id');
}

async function saveLocation(locationInfo) {
    await db('triplog').insert(locationInfo).returning('id');
}

async function getTripsForUser(userId) {
    response = await db('triplog').where({user_id: userId}).select('id', 'lat', 'lng') //this api is used to plot the initial locations already visited by this user
    return response;
}

module.exports = {addUser, saveLocation, getTripsForUser}
