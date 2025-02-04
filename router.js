const express = require("express");
const Router = express.Router();

// Importing controllers
const user = require("./Modules/User/userController");
const petuser = require("./Modules/Petshop/petshopuserController");

// Defining routes
Router.post("/login", user.login);         
Router.post("/petregister", petuser.petshopRegister); 
Router.post("/viewpetshoprequests",petuser. findshopregister)   
Router.post("/acceptshoprequest/:id",petuser.acceptshopReq)
Router.post("/rejectshoprequest/:id",petuser.rejectshopReq)
Router.post("/petshoplogin",petuser.petlogin)

module.exports = Router;
