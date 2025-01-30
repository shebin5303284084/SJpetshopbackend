const express = require("express");
const Router = express.Router();

// Importing controllers
const user = require("./Modules/User/userController");
const petuser = require("./Modules/Petshop/petshopuserController");

// Defining routes
Router.post("/login", user.login);         
Router.post("/petregister", petuser.petshopRegister); 
Router.post("/findregister",petuser. findshopregister)

module.exports = Router;
