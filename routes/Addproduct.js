var express = require('express');
var router = express.Router();
var product = require("../models/Product");
// var multer = require("multer");
// const path = require('path');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../public/images'))
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })

// Add Product
// router.post('/Addproduct', async function (req, res, next) {
//     console.log("name");

//     try {
//         // req.body.image = req.file.originalname;
//         const data = await new product.create(req.body);

//         res.status(201).json({
//             status: "success",
//             data: data
//         })

//     } catch (error) {

//         res.json({
//             error
//         })
//     }

// });
router.post('/Addproduct', async function (req, res, next) {
    console.log("name");

    try {
        // req.body.image = req.file.originalname;
        const data = await product.create(req.body);

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


// Update Product
router.patch('/UpdateProduct/:id', async function (req, res, next) {
    console.log(req.params.id);
    try {

        var data = await product.findByIdAndUpdate(req.params.id,req.body);
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

// Show Product
router.get('/Showproduct', async function (req, res, next) {
    try {

        var data = await product.find(req.body);
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {

        res.json({
            error
        })
    }
});



// ShowOne Product 
router.get('/ShowOneProduct/:id', async function (req, res, next) {
    try {

        var data = await product.findById(req.params.id);
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
router.delete('/DeleteProduct/:id', async function (req, res, next) {
    console.log(req.params.id);
    try {

        var data = await product.findByIdAndDelete(req.params.id);
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