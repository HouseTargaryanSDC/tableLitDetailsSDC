const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


const getInfo = function(id, callback) {
  connection.query('SELECT * FROM restaurant WHERE id=?',id,callback)
}

const postInfo = function(values, callback) {
  connection.query('INSERT INTO `restaurant`(id, name, description, dining_style, phone_number, website, executive_chef, address, neighborhood, parking_details, events_promotions, additional, review_number, average_star, payments, cuisines, operation_hours) VALUES (?)', values, callback)
}

 const deleteInfo = function(id, callback) {
   connection.query('DELETE FROM restaurant WHERE id=?', id, callback);
 }

 const updateInfo = function(id, value, callback) {
   connection.query('UPDATE restaurant SET name = ? WHERE id = ?', [value, id], callback);
 }

module.exports = {
  getInfo,
  postInfo,
  deleteInfo,
  updateInfo
}