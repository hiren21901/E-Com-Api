var express = require('express');
var router = express.Router();
var Category = require('../models/Category');

router.post('/AddCategory', async function (req, res, next) {

    try {


        var data = await Category.create(req.body);

        res.status(201).json({
            status: "success",
            data: data
        })

    } catch (error) {

        res.json({
            error
        })
    }

});


// Show Product
router.get('/Showcategory', async function (req, res, next) {
    try {

        var data = await Category.find(req.body);
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {

        res.json({
            error
        })
    }
});




// ShowOne Product 
router.get('/ShowOneCategory/:id', async function (req, res, next) {
    try {

        var data = await Category.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {

        res.json({
            error
        })
    }
});


// Update Product
router.patch('/UpdateCategory/:id', async function (req, res, next) {
    console.log(req.params.id);
    try {

        var data = await Category.findByIdAndUpdate(req.params.id,req.body);
        data.save()
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {

        res.json({
            error
        })
    }
});


router.delete('/DeleteCategory/:id', async function (req, res, next) {
    console.log(req.params.id);
    try {

        var data = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            data: data
        })
    } catch (error) {

        res.json({
            error
        })
    }
});





module.exports = router;