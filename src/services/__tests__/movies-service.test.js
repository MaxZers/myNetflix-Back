const Chance = require("chance");

const MovieService = require("../movie-service");
const Movie = require("../../models/movie");

const chance = new Chance();

jest.mock("../../models/movie");
jest.mock("../movie-service");

describe("when calling saveMovie service method", () => {
  let movie;

  beforeEach(() => {
    movie = {
      name: chance.string(),
      synopsis: chance.string(),
      coverImage: chance.string(),
      genre: chance.string(),
      movieUrl: chance.string(),
      releaseDate: chance.string()
    };

    MovieService.saveMovie = jest.fn().mockReturnValue(movie);
    MovieSaveSpy = jest
      .spyOn(new Movie(), "save")
      .mockImplementation(() => Promise.resolve(movie));

    MovieObjectSpy = jest
      .spyOn(new Movie(), "toObject")
      .mockImplementation(() => Promise.resolve(movie));
  });


  it("should create a new movie instance with the movie data", async () => {
    await MovieService.saveMovie(movie);
    expect(Movie).toBeCalledWith(movie);
  });
});
