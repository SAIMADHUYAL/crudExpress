

//Express
const express = require('express');

// app is the object of express();
const app = express();



// Connection with MongoDB
const MongoClient = require('mongodb').MongoClient;
let db;

const mongoURL = 'mongodb://localhost:27017/';

//Body Parser for Data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const collname = 'team';


//Update - HTTP Method
app.put('/updateuser',(req,res) =>{
    db.collection(collname)
    .findOneAndUpdate({"name":req.body.name},{
        $set:{
            name: req.body.name,
            age: req.body.age
        }
    },{
        upsert: true
    },(err,result) =>{
        if(err) return res.send(err);
        res.send(result);
    })
})


//POST - HTTP Method
app.post('/user',(req,res) => {
    db.collection(collname)
    .insertOne(req.body,(err,result) => {
        if(err) throw err;
        res.send(result);
        res.send('Data Inserted');
    })
})



// GET - HTTP Method
app.get('/',function(req,res){
    res.send('It is working')
})

app.get('/user',function(req,res){
    db.collection(collname).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    })
})


//Delete - HTTP Method
app.delete('/deleteuser',(req,res) => {
    db.collection(collname)
    .findOneAndDelete({"name": req.body.name},(err,result) => {
        if(err) return res.send(err);
        res.send('Data Deleted');
    })
})


//Creating Connection with MongoDB.
MongoClient.connect(mongoURL,{useUnifiedTopology: true},function(err,client){
    if(err) throw err;
    db = client.db('tcsdb');
    app.listen(3000);
});
