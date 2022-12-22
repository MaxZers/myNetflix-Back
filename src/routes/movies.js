const express = require("express");

const moviesController = require("../controller/movies-controller");

const router = express.Router();

// Metodos a solicitar en la DB
router.get("/", moviesController.getMovies);

router.post("/", moviesController.saveMovie);

router.put("/:id", moviesController.updateMovie);

router.delete("/:id", moviesController.deleteMovie);

module.exports = router;
