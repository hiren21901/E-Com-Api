var express = require('express');
var router = express.Router();
var Subcategory = require('../models/Subcategory');



/* GET home page. */
// Add Product
router.post('/Addsubcategory', async function (req, res, next) {

    try {


        var data = await Subcategory.create(req.body);

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
router.get('/Showsubcategory', async function (req, res, next) {
    try {

        var data = await Subcategory.find(req.body);
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

        var data = await Subcategory.findById(req.params.id);
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


router.patch('/UpdateSubCategory/:id' , async function (req, res, next){
    try {

         var data = await Subcategory.findByIdAndUpdate(req.params.id, req.body);
         data.save()
         res.status(200).json({
            status:"success",
            data: data
         })
        
    } catch (error) {
        res.json({
            error
        })
        
    }
})






module.exports = router;