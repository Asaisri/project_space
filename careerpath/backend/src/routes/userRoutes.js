const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/UserController');

//User Routes

Router.post('/addusrdata',UserController.AddUserData);

module.exports = Router;
