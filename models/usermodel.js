//Schema for unstructured Data by using Mongoose

var mongoose = require('mongoose'), 
    Schema = mongoose.schema;


    //This is the Schema for the Unstructured data.
    var userModel = new Schema(
        {
            name : {type: String},
            age:{ type: Number},
            empid: {type: String}
        }
    );

    module.exports = mongoose.model('user',userModel,'userList');