const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require("jsonwebtoken");

function amazonOrders_validation(amazonOrders) {
    const joi_amazonOrders_schema = Joi.object
        ({
            user_id: Joi.string(),
           //images: Joi.string().min(2).max(1024),
        })
    return result = joi_amazonOrders_schema.validate(amazonOrders);
}

const amazonOrders_schema = new mongoose.Schema
    ({
        user_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            
        },
        products_array : 
        {
            type: Array
        }
    })



const amazonOrders = mongoose.model('amazonOrders', amazonOrders_schema);
module.exports.amazonOrders = amazonOrders;
module.exports.amazonOrders_validation = amazonOrders_validation;

