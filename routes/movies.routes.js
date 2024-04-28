module.exports = app => {
    const movies = require("../controllers/movies.controller.js");
    let router = require("express").Router();
  
    // Create a new Movies
    router.post("/", movies.create);
  
    // Retrieve all Movies
    router.get("/", movies.findAll);
  
    app.use("/api/movies", router);
  };