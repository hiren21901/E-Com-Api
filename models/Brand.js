const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    categoryname: {
        type: String,
        trim: true,
        required: true,
    },
    subcategoryname: {
        type: String,
        trim: true,
        required: true,
    },
    brandname: {
        type: String,
        trim: true,
        required: true,
    },
    
})

const Brand = mongoose.model("Brand", userSchema);

module.exports = Brand