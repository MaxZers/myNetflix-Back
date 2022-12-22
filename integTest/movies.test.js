const request = require("supertest");

const { app, server } = require("../src/index");

afterAll(() => {
  server.close();
});

describe("when calling GET /movies endpoint", () => {
  it("sholud return a 200 status code", async () => {
    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);
  });

  it("should return an array of movies", async () => {
    const response = await request(app).get("/movies");

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          synopsis: expect.any(String),
        }),
      ])
    );
  });
});

describe("when calling POST /movies endpoint", () => {
  it("should return a 201 status code when a movie is created", async () => {
    const response = await request(app).post("/movies").send({
    name: "Testing",
    synopsis: "I am testing my app in order to upload it",
    coverImage:"https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-11/tren-pasajeros-cdmx-veracruz.jpg",
    genre:"Drama",
    movieUrl:"https://www.youtube.com/watch?v=Fvpggq4rPqg&ab_channel=HorrorShortsParty",
    releaseDate:"2022-12-14"
    });

    expect(response.status).toBe(201);
  });
});
