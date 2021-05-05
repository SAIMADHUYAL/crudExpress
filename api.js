const express = require('express');
const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/tcsdb',{useUnifiedTopology: true, useNewUrlParser: true});
var user = require('./models/usermodel');
var app = express();

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/dataget',(req,res) =>{
    user.find(function(err,data){
        if(err) return res.send(err);
        res.json(data);
    })
})

app.post('/datapost',(req,res) =>{
    user.create(req.body,function(err,data){
        if(err) return res.send(err);
        res.json(data);
    })
})




app.get('/',function(req,res){
    res.send('Welcome to Mongoose');
})
app.listen(3000)



