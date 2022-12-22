const MovieService = require("../services/movie-service");

const getMovies = async (req, res) => {
  const movies = await MovieService.getMovies();
  //res.status(201).json(movies);
  res.json(movies);
};

const saveMovie = async (req, res) => {
  const movie = req.body;

  try{
    const savedMovie = await MovieService.saveMovie(movie);
    res.status(201).json(savedMovie);
  }catch(error){
    res.status(500).json({message: "Internal Error"});
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const newMovieInfo = req.body;

  const updatedMovie = await MovieService.updateMovie(id, newMovieInfo);

  res.json(updatedMovie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  await MovieService.deleteMovie(id);

  res.status(204).send();
};

const getMovieByGenre = async (req, res) =>{
  const { movieGenre } = req.params;

  const moviesSorted = await MovieService.getMovieByGenre(movieGenre);

  res.json(moviesSorted);
}

module.exports = {
  getMovies,
  saveMovie,
  updateMovie,
  deleteMovie,
  getMovieByGenre
};
