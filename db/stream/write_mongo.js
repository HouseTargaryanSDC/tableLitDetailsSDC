const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Restaurant', {
  useNewUrlParser:true
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
  console.log('success');    
})

const restaurantSchema = new mongoose.Schema({
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
    operation_hours: String   
});
//id,name,description,dining_style,phone_number,website,executive_chef,address,neighborhood,parking_details,events_promotions,additional,review_number,average_star,payments,cuisines,operation_hours
const Restaurant = mongoose.model('Details', restaurantSchema);
let dumm_data = {
  id: 0,
  name: 'Hummus Factory',
  description: 'Local Mediterranean counter-serve chain offering kebabs, gyros & wraps in a contemporary space.',
  dining_style: 'Mediterranean',
  phone_number: '310-410-9999',
  website: 'http://thehummusfactory.com/',
  executive_chef: 'unknown',
  address: '6081 Center Dr #218, Los Angeles, CA 90045',
  neighborhood: 'Culver City',
  parking_details: 'unknown',
  events_promotions: 'n/a',
  additional: '',
  review_number: '666',
  average_star: '3.4',
  payments: 'all types',
  cuisines: 'bomb dot com',
  operation_hours: 'M-F, 11AM-8PM'
      
}
new Restaurant(dumm_data).save(err => {if(err)console.log(err)})
// module.exports = {
//   db,
//   Restaurant    
