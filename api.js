const express = require('express');
const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/tcsdb');
var user = require('./models/usermodel');




