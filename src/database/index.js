const knex = require('knex');
const mockDb= require('mo')
const environment= process.env.NODE_ENV || process.env.ENVIRONMENT || 'production';
const config =require('../knexfile.js')[environment];
const connection = environment;

module.exports=connection;