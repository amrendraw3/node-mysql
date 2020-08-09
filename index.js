var mysql = require('mysql');
var dbConn = require('./config/db.js')["sqlConn"]();
var userQueries = require('./queries/users');

dbConn.query(userQueries.getUsers(), function(error, results, fields) {
    if (error) throw error;
    console.log('The users are: ', results[0]);
});