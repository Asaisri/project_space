const express = require('express');
const Router = express.Router();

const CareerLoginController = require('../controllers/CareerLoginController');

//User Routes

Router.post('/',CareerLoginController.AddCareerLoginData);

module.exports = Router;
