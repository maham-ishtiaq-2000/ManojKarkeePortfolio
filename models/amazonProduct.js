const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require("jsonwebtoken");

function amazonProduct_validation(amazonProduct) {
    const joi_amazonProduct_schema = Joi.object
        ({
            description: Joi.string(),
            price : Joi.string(),
            rating : Joi.string(),
            url : Joi.string(),
          
        })

    return result = joi_amazonProduct_schema.validate(amazonProduct);
}

const amazonProduct_schema = new mongoose.Schema
    ({
        description:
        {
            type: String,
       
        },
        price:
        {
            type: String,    
        },
        rating:
        {
            type: String
        },
        url:
        {
            type: String
        }
        
    })



const amazonProduct = mongoose.model('amazonProduct', amazonProduct_schema);
module.exports.amazonProduct = amazonProduct;
module.exports.amazonProduct_validation = amazonProduct_validation;

