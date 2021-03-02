knexJs = require('knex');
knexConfig = require('./knexfile.js')

const knex = knexJs(knexConfig);
module.exports = knex;
