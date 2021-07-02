const Sequelize = require('sequelize');
require('dotenv').config();

const database = new Sequelize('qa', process.env.DBUSER, process.env.DBPASS, {
  host: process.env.DBHOST,
  dialect: 'postgres'
})

module.exports = database;