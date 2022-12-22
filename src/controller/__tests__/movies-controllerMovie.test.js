const Chance = require("chance");

const moviesController = require("../movies-controller");
const MovieService = require("../../services/movie-service");

const chance = new Chance();

jest.mock("../../services/movie-service");

describe("when calling saveMovie controller method", () => {
  let movie, req, res;

  beforeEach(() => {
    movie = {
      name: chance.string(),
      synopsis: chance.string(),
      coverImage: chance.string(),
      genre: chance.string(),
      movieUrl: chance.string(),
      releaseDate: chance.string()

    };
    req = {
      body: movie,
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    MovieService.saveMovie = jest.fn().mockResolvedValue(movie);
  });

  it("should call MovieService.saveMovie with the movie data", async () => {
    await moviesController.saveMovie(req, res);

    expect(MovieService.saveMovie).toBeCalledWith(movie);
  });

  it("should call res.json with the save movie data", async () => {
    await moviesController.saveMovie(req, res);

    expect(res.json).toBeCalledWith(movie);
  });

  it("should call res.status with a 201 when the movie is created", async () => {
    await moviesController.saveMovie(req, res);

    expect(res.status).toBeCalledWith(201);
  });

  it("should call res.status with 500 when the  MovieService.saveMovie service fails", async () => {
    const error = new Error();
    MovieService.saveMovie = jest.fn().mockRejectedValue(error);

    await moviesController.saveMovie(req, res);

    expect(res.status).toBeCalledWith(500);
  });
});
