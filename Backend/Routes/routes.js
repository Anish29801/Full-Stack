const express = require("express");
const Router = express.Router();
const { home ,createUser ,getUsers,editUser,deleteUser} = require("../Controllers/userController")

Router.get("/",home);
Router.post("/createUser",createUser);
Router.get("/getUsers",getUsers);
Router.get("/editUser",editUser);
Router.get("/deleteUser",deleteUser);

module.exports = Router;