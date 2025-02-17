const express = require("express");
const Router = express.Router();

// Importing controllers
const user = require("./Modules/User/userController");
const petuser = require("./Modules/Petshop/petshopuserController");
const petProduct = require("./Modules/PetProducts/petProductController");
const Cart= require("./Modules/User/AddToCart/AddCartController");

// Defining routes
Router.post("/petshopuserregisteration",user.userRegistration)
Router.post("/login", user.login);
Router.post("/petregister", petuser.petshopRegister);
Router.post("/viewpetshoprequests", petuser.findshopregister);
Router.post("/acceptshoprequest/:id", petuser.acceptshopReq);
Router.post("/rejectshoprequest/:id", petuser.rejectshopReq);
Router.post("/petshoplogin", petuser.petlogin);

//petproduct
Router.post("/addproduct",petProduct.upload, petProduct.addproduct);
Router.post("/viewdog", petProduct.findByCategory);

//cart

Router.post("/savecart" , Cart.AddCart)

module.exports = Router;
