const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    categoryname:{
        type:String,
        trim:true,
        required:true,
    },
    subcategoryname:{
        type:String,
        trim:true,
        required:true,
    },
})

const Subcategory = mongoose.model("Subcategory",userSchema);

module.exports = Subcategory;