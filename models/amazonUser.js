const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require("jsonwebtoken");

function amazonUser_validation(amazonUser) {
    const joi_amazonUser_schema = Joi.object
        ({
            user_email: Joi.string(),
            user_password : Joi.string(),
            name : Joi.string()
            //images: Joi.string().min(2).max(1024),
        })
    return result = joi_amazonUser_schema.validate(amazonUser);
}

const amazonUser_schema = new mongoose.Schema
    ({
        user_email:
        {
            type: String,
            
            
        },
        user_password:
        {
            type: String,
            
        },
        name:
        {
            type: String
        },
        add_to_basket: [{
            product_id: {
                type: mongoose.Schema.Types.ObjectId
            },
            user_id: {
                type: mongoose.Schema.Types.ObjectId
            },
            description:
            {
                type: String,
                required: true
            },
            price:
            {
                type: String,
                required: true
            },
            rating : {
                type: String,
            },
            url: {
                type: String,

            }
        }],
        orders_list: [{
            product_id: {
                type: mongoose.Schema.Types.ObjectId
            },
            user_id: {
                type: mongoose.Schema.Types.ObjectId
            },
            description:
            {
                type: String,
                required: true
            },
            price:
            {
                type: String,
                required: true
            },
            rating : {
                type: String,
            },
            url: {
                type: String,

            }
        }]
    })



const amazonUser = mongoose.model('amazonUser', amazonUser_schema);
module.exports.amazonUser = amazonUser;
module.exports.amazonUser_validation = amazonUser_validation;

