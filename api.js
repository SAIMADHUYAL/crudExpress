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

//Update
app.put('/dataupdate',(req,res) =>{
    user.findOneAndUpdate({"name":req.body.name},{
        $set:{
            age: req.body.age
        }
    },{
        upsert: true
    },(err,result) =>{
        if(err) return res.send(err);
        res.send(result);
    })
})



//Delete - HTTP Method
app.delete('/deleteuser',(req,res) => {
        user.findOneAndDelete({"name": req.body.name},(err,result) => {
        if(err) return res.send(err);
        res.send('Data Deleted');
    })
})





app.get('/',function(req,res){
    res.send('Welcome to Mongoose');
})
app.listen(3000)



