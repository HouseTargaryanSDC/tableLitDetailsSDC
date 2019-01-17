const fs = require('fs');
const faker = require('faker');
const path = require("path");

const writeStream = fs.createWriteStream(path.resolve(__dirname, "./csv_data/data_1.csv"));

for(let i = 1; i < 1000001; i++){
    let id = i; 
    let name = faker.name.findName();
    let description = faker.random.words();
    let dining_style = faker.commerce.department();
    let phone_number = faker.phone.phoneNumberFormat();
    let website = faker.internet.url();
    let executive_chef = faker.name.findName();
    let address = faker.address.streetAddress();
    let neighborhood = faker.address.city();
    let parking_details = faker.company.catchPhrase();
    let events_promotions = faker.company.catchPhraseDescriptor();
    let additional = faker.company.catchPhrase();
    let review_number = Math.floor(Math.random() * 4000) + 1;
    let average_star = Math.floor(Math.random() * 5) + 1;
    let payments = faker.lorem.words();
    let cuisines = faker.hacker.ingverb();
    let operation_hours = faker.date.recent();

    let data = `${id},${name},${description},${dining_style},${phone_number},${website},${executive_chef},${address},${neighborhood},${parking_details},${events_promotions},${additional},${review_number},${average_star},${payments},${cuisines},${operation_hours}\n`;
    
    writeStream.write(data, (err) => {
        if(err) {
            console.log(err);
        } else {
        //   console.log('success, again!')    
        }
    })
// for(let i = 1; i < 1000001; i++){
// for(let i = 1000001; i < 2000001; i++){
// for(let i = 2000001; i < 3000001; i++){   
// for(let i = 3000001; i < 4000001; i++){ 
// for(let i = 4000001; i < 5000001; i++){    
// for(let i = 5000001; i < 6000001; i++){
// for(let i = 6000001; i < 7000001; i++){
// for(let i = 7000001; i < 8000001; i++){
// for(let i = 8000001; i < 9000001; i++){
}

writeStream.end();