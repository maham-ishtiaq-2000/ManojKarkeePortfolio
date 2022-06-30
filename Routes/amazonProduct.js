require('dotenv').config()
const express = require('express');
const Joi = require('joi');
const { amazonProduct_validation, amazonProduct } = require('../models/amazonProduct');
const router = express.Router();
const fs = require('fs');
var XLSX = require("xlsx");
const jwt = require("jsonwebtoken");


//-----     add a student     ------//
router.post('/addAnAmazonProduct', async (req, res) => {
    const result = amazonProduct_validation(req.body);
    if (result.error != null) {
        return res.json
            ({
                success: false,
                message: (result.error.details[0].message)
            })
    }
   
    try {
        const new_user = new amazonProduct
            ({
               description : req.body.description,
               price : req.body.price,
               rating : req.body.rating,
               url : req.body.url
            })

        
        
        const student = await new_user.save();

     
          
        return res.json
            ({
                success: true,
                message: "Product registered successfully",
            })
    }
    catch (err) {
        return res.json
            ({
                success: false,
                message: err.message,
            })
    }
})


router.get('/all_products', async (req, res) => {

    const get_all_products = await amazonProduct.find()
    if (get_all_products == null)
        return res.json
            ({
                success: false,
                error: "no products stored in a database",
            })
    if (get_all_products != null)
        return res.json
            ({
                success: true,
                data: get_all_products,
            })
})





module.exports = router;
