const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    image:{
        type:String   
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    }
})

const product = mongoose.model("product",userSchema);

module.exports = product;