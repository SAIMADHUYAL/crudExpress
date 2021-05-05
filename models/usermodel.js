//Schema for unstructured Data by using Mongoose

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


    //This is the Schema for the Unstructured data.
    var userModel = new Schema(
        {
            name : {type: String},
            age:{ type: Number},
            empid: {type: String},
            projects:{type: Array},
            followers: {type: Number}
        }
    );

    module.exports = mongoose.model('user',userModel,'team');