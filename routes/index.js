var express = require('express');
var router = express.Router();
var registration = require("../models/Registration");
const bcrypt = require('bcrypt')



// registraion pages.....................................................................


/* GET home page. */
router.post('/registerdata' , async function (req, res, next) {
  try {

      var bpassword = await bcrypt.hash(req.body.password, 10);
      var obj = {
          name: req.body.name,  
          email: req.body.email,
          password: bpassword
      }
      var data = await registration.create(obj);
      // console.log(obj);

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

// login pages........................................................................


router.post('/logindata', async function (req, res, next) {
  // console.log("hello");
      try {
        
        console.log(req.body);  
          var data = await registration.find({"email":req.body.email});
          console.log(data);
          var [data] = data;
  
          var check = await bcrypt.compare(req.body.password, data.password);
          console.log(check);
  
          res.status(200).json({
              status: "success",
              name:data.name,
              email:data.email,
              id:data.id,
              value:check
          })
      
      } catch (error) {
  
          res.json({
              result:"Data Not Found",
              error
          })
      }
  
  });
  
  module.exports = router;
