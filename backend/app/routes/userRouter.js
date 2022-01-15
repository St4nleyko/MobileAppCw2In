module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Retrieve all lessons
    router.get("/users", users.findAll);
  
    
  
    app.use('/', router);
  };