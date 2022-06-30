require('dotenv').config()
const express = require('express');
const Joi = require('joi');
const { amazonUser_validation, amazonUser } = require('../models/amazonUser');
const { amazonProduct_validation, amazonProduct } = require('../models/amazonProduct');
const {amazonOrders_validation , amazonOrders } = require('../models/amazonOrders');
const router = express.Router();
const fs = require('fs');
var XLSX = require("xlsx");
const jwt = require("jsonwebtoken");





module.exports = router;
