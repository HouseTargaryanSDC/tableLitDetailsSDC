const mongoose = require('mongoose');

// make connectio to create database
mongoose.connect("mongodb://54.87.142.172:27017/Restaurant", {
  useNewUrlParser: true    
});

const db = mongoose.connection;

db.on('error', () => console.error('conection error'));
db.once('open', () => console.log('successfully connected to MongoDB'));

const Restaurant = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  dining_style: String,
  phone_number: String,
  website: String,
  executive_chef: String,
  address: String,
  neighborhood: String,
  parking_details: String,
  events_promotions: String,
  additional: String,
  review_number: Number,
  average_star: Number,
  payments: String,
  cuisines: String,
  operation_hours: String,
});

const Restaurants = mongoose.model("Details", Restaurant, 'Details');

module.exports = Restaurants;


// const mysql = require('mysql');
// const mysqlConfig = require('./config.js');

// const connection = mysql.createConnection(mysqlConfig);
//   console.log('mysqlConfig', mysqlConfig)
//   connection.connect(function(error) {
//     if(error) throw error
//   })

//   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });

// const getInfo = function(id, callback) {
//   connection.query('SELECT * FROM restaurant WHERE id=?',id,callback)
// }

// const postInfo = function(values, callback) {
//   connection.query('INSERT INTO `restaurant`(id, name, description, dining_style, phone_number, website, executive_chef, address, neighborhood, parking_details, events_promotions, additional, review_number, average_star, payments, cuisines, operation_hours) VALUES (?)', values, callback)
// }

//  const deleteInfo = function(id, callback) {
//    connection.query('DELETE FROM restaurant WHERE id=?', id, callback);
//  }

//  const updateInfo = function(id, value, callback) {
//    connection.query('UPDATE restaurant SET name = ? WHERE id = ?', [value, id], callback);
//  }

// module.exports = {
//   connection,
//   getInfo,
//   postInfo,
//   deleteInfo,
//   updateInfo
// }