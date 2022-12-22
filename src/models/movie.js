const mongoose = require("mongoose");


const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
  },
  coverImage: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    required: true,
  },
  movieUrl: {
    type: String,
    require: true
  },
  releaseDate: {
    type: String,
    require: true
  },
});

/*const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;*/

module.exports = mongoose.model("Movie", MovieSchema);
