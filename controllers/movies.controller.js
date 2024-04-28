const db = require("../models");

const Student = db.movies;

//Create and Save a new Movies
exports.create = function (req, res) {
  // Validate request
  if (!req.body.titre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Student
  const student = new Student({
    titre: req.body.titre,
    genre: req.body.genre,
    synopsis: req.body.synopsis,
  });
// Save Student in the database
  movies
    .save(movies)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the movie.",
      });
    });
}
// Retrieve all movies from the database.
exports.findAll = (req, res) => {
  const titre = req.query.titre;
  let condition = titre
    ? { titre: { $regex: new RegExp(titre), $options: "i" } }
    : {};
  Movies.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving movies.",
      });
      });
  }
    