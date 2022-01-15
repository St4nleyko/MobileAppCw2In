module.exports = app => {
    const lessons = require("../controllers/lessonController.js");
  
    var router = require("express").Router();
  
    // Retrieve all lessons
    router.get("/lessons", lessons.findAll);
  
    
  
    app.use('/', router);
  };