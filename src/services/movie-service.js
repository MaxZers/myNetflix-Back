const Movie = require("../models/movie");

const getMovies = async () => {
  const movies = await Movie.find().lean().exec();
  return movies;
};

const saveMovie = async (movie) => {
  const savedMovie = new Movie(movie);

  await savedMovie.save();

  return savedMovie;
};

const updateMovie = async (id, newMovieInfo) => {
  const updatedMovie = await Movie.findByIdAndUpdate(id, newMovieInfo, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updatedMovie;
};

const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id).exec();
};

const getMovieByGenre = async (movieGenre) => {
  const moviesSorted = Movie.find({genre: movieGenre}).lean().exec();

  return moviesSorted;
};

module.exports = {
  getMovies,
  saveMovie,
  updateMovie,
  deleteMovie,
  getMovieByGenre,
};
