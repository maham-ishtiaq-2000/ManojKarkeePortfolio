require('dotenv').config()
const express = require('express');
const Joi = require('joi');
const { amazonUser_validation, amazonUser } = require('../models/amazonUser');
const { amazonProduct_validation, amazonProduct } = require('../models/amazonProduct');
const router = express.Router();
const fs = require('fs');
var XLSX = require("xlsx");
const jwt = require("jsonwebtoken");


//-----     add a student     ------//
router.post('/addAnAmazonUser', async (req, res) => {
    const result = amazonUser_validation(req.body);
    if (result.error != null) {
        return res.json
            ({
                success: false,
                message: (result.error.details[0].message)
            })
    }
   
    try {
        const new_user = new amazonUser
            ({
               user_email : req.body.user_email,
               user_password : req.body.user_password,
               name : req.body.name
            })

        
        
        const student = await new_user.save();

     
          
        return res.json
            ({
                success: true,
                message: "Account registered successfully",
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


router.post('/loginAmazonUser', async (req, res) => {
    
    const result = amazonUser_validation(req.body);
    if (result.error != null) {
        return res.json({
            success: false,
            status: 400,
            message: result.error.details[0].message
        })
    }
    try {
        var get_user = await amazonUser.findOne({
            user_email : req.body.user_email,
            user_password : req.body.user_password,
        })
        if (!get_user) {
            return res.json
                ({
                    success: false,
                    message: "something is incorrect....",
                    status: 400
                })
        }
        if (get_user) {
           
            return res.json             
                ({
                    success: true,
                    data: get_user,
                   
                })
        }
        
    }
    catch (err) {
        return res.json
            ({
                success: false,
                error: err,
            })
    }
})


//-----  add favorite tailor   ------//
router.put('/add_product_to_basket/:product_id/:user_id', async (req, res) => {
    try {
        const get_product = await amazonProduct.findOne({ _id: req.params.product_id });
        console.log(get_product)
        

        const add_to_basket= await amazonUser.findOneAndUpdate({ _id: req.params.user_id },
            {
                $push: {
                    add_to_basket: {
                        product_id: req.params.product_id,
                        user_id: req.params.user_id,
                        description: get_product.description,
                        price: get_product.price,
                        rating: get_product.rating,
                        url: get_product.url
                    }
                }
            },
            { new: true }).select({ add_to_basket: 1 })

        return res.json
            ({
                success: true,
                message: "Product added to a basket",
                data: add_to_basket
            })
    }
    catch (err) {
        return res.status(500).json
            ({
                success: false,
                message: err,
            })
    }
})


router.get('/products_selected_by_single_user/:user_id', async (req, res) => {
    try {
        const get_user = await amazonUser.findById({_id : req.params.user_id})
        return res.json
            ({
                success: true,
                message: "User of a product",
                data: get_user.add_to_basket
            })
    }
    catch (err) {
        return res.status(500).json
            ({
                success: false,
                message: err,
            })
    }
})

router.get('/products_ids_selected_by_single_user/:user_id', async (req, res) => {
    try {
        const get_user = await amazonUser.findById({_id : req.params.user_id})
        let add_to_basket = get_user.add_to_basket
        console.log(add_to_basket)
        let pricesArray = []
        for (let i = 0; i < add_to_basket.length; i++) {
            pricesArray.push(add_to_basket[i].product_id)
        }
        console.log(pricesArray)
        return res.json
            ({
                success: true,
                message: "User of a product",
                data: pricesArray
            })
    }
    catch (err) {
        return res.status(500).json
            ({
                success: false,
                message: err,
            })
    }
})


//-----  add favorite tailor   ------//
router.put('/remove_product_from_basket/:product_id/:user_id', async (req, res) => {
    try {
        // const get_favoriate_tailor = await User.findOne({ _id: req.params.user_id, post_id: req.params.post_id })
        // if (get_favoriate_tailor == null) {
        //     return res.json
        //         ({
        //             success: false,
        //             message: "Post does not exist in favorite list",
        //         })

        // }

        const basket_product = await amazonUser.findOneAndUpdate({ _id: req.params.user_id },
            {
                $pull: {
                    add_to_basket: {
                        product_id: req.params.product_id,
                    }
                }
            },
            { new: true })

        return res.json
            ({
                success: true,
                message: "Product removed from basket",
                data: basket_product,
            })
    }
    catch (err) {
        return res.status(500).json
            ({
                success: false,
                message: err,
            })
    }
})


router.get('/prices_array/:user_id', async (req, res) => {
    try {
        const get_user = await amazonUser.findById({_id : req.params.user_id})
        let pricesObject = get_user.add_to_basket
        console.log(pricesObject)
        let pricesArray = [];
        for (let i = 0; i < pricesObject.length; i++) {
            pricesArray.push(pricesObject[i].price)
        }
        console.log(pricesArray)
        let totalOrderPrice = 0;
        for (let i = 0 ; i < pricesArray.length ; i++){
            let val = parseInt(pricesArray[i])
            totalOrderPrice = totalOrderPrice + val  
        }
        console.log(totalOrderPrice)

        return res.json
            ({
                success: true,
                message: "User of a product",
                data : totalOrderPrice
               
            })
    }
    catch (err) {
        return res.status(500).json
            ({
                success: false,
                message: err,
            })
    }
})

router.put("/orders_list/:user_id" , async(req,res) => {
    const amazon_user = await amazonUser.findOne({_id : req.params.user_id})
    let basket_products = amazon_user.add_to_basket
    console.log(basket_products)
    for (let i = 0 ; i < basket_products.length ; i++){
        const basket_product = await amazonUser.findOneAndUpdate({ _id: req.params.user_id },
            {
                $push: {
                    orders_list: {
                        product_id: basket_products[i].product_id,
                        user_id: req.params.user_id,
                        description: basket_products[i].description,
                        price: basket_products[i].price,
                        rating: basket_products[i].rating,
                        url: basket_products[i].url
                    }
                }
            },
            { new: true })
    } 
    for (let i = 0 ; i < basket_products.length ; i++){
        const newUesr = await amazonUser.updateOne( {_id : req.params.user_id} , {
            $pop : {add_to_basket: -1}
        } , {new : true})
        console.log(newUesr)
    } 
    console.log("ok")
    res.send("ALLAH U AKBAR")
    
})


router.get('/orders_list/:user_id', async (req, res) => {
    try {
        const get_user = await amazonUser.findById({_id : req.params.user_id})
        let add_to_basket = get_user.orders_list
        console.log(add_to_basket)
        return res.json
            ({
                success: true,
                message: "User of a product",
                data: add_to_basket
            })
    }
    catch (err) {
        return res.status(500).json
            ({
                success: false,
                message: err,
            })
    }
})




module.exports = router;
