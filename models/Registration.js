const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
        email:{
            type:String
        },
        password:{
            type:String
        }

})

const registration = mongoose.model("registration",userSchema);

module.exports = registration;