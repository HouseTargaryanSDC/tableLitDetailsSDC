const express = require('express');
const path = require('path');
const parser = require('body-parser');
const { getInfo, postInfo, deleteInfo, updateInfo } = require('../db/index.js');
const cors = require("cors");

const app = express();


app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../client/dist')))


app.get('/api/restaurant', (req,res)=>{
    //?id=10000001
    console.log('req.query, ',req.query.id)
    getInfo(req.query.id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(data)
        }
    });
});

app.post('/api/restaurant', (req, res) => {
    console.log(req.body, 'what diss????')
    console.log('inside post')
    //let {id, name, description, dining_style, phone_number, website, executive_chef, address, neighborhood, parking_details, events_promotions, additional, review_number, average_star, payments, cuisines, operation_hours} = req.body;
    postInfo(req.body, (err, data) => {
        if(err){
            console.log(err)
        } else {
            res.status(200).send(console.log('success!!'));
        }
    });
});

app.delete('/api/restaurant', (req, res) => {
  deleteInfo(req.query.id, (err, data) => {
      if(err){
        console.log(err);
      } else {
          res.status(200).send('deleted!');
      }
  });
});

app.put('/api/restaurant', (req, res) => {
  updateInfo(req.query.id, req.body, (err) => {
    if(err) {
      console.log(err);
    } else {
        res.status(200).send('updated!')
    }
  })
})





module.exports = app;