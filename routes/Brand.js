var express = require('express');
var router = express.Router();
var Brand = require('../models/Brand');

router.post('/Addbrand', async function (req, res, next) {

    try {


        var data = await Brand.create(req.body);

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
router.get('/Showbrand', async function (req, res, next) {
    try {

        var data = await Brand.find(req.body);
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


router.get('/ShowOneBrand/:id', async function (req, res, next) {
    try {

        var data = await Brand.findById(req.params.id);
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
router.patch('/UpdateBrand/:id', async function (req, res, next) {
    console.log(req.params.id);
    try {

        var data = await Brand.findByIdAndUpdate(req.params.id, req.body);
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


// Delete Product
router.delete('/DeleteBrand/:id', async function (req, res, next) {
    console.log(req.params.id);
    try {

        var data = await Brand.findByIdAndDelete(req.params.id);
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