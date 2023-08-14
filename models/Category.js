const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    Categoryname :{
        type:String,
        trim:true,
        require:true,
    }
})

const Category = mongoose.model("Category",userSchema);

module.exports = Category;