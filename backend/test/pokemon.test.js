const request = require("supertest");

let server;

describe("GET /api/pokemon", () => {
  const apiUrl = "/api/pokemon";

  beforeEach(() => (server = require("../index")));

  afterEach(() => server.close());

  it("should return pokemon name and description", async () => {
    const res = await request(server).get(`${apiUrl}/ditto`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("name", "ditto");
    expect(res.body).toHaveProperty(
      "description",
      "It can freely recombine its own cellular structure to transform into other life-forms."
    );
    const res2 = await request(server).get(`${apiUrl}/charizard`);
    expect(res2.status).toBe(200);
    expect(res2.body).toHaveProperty("name", "charizard");
    expect(res2.body).toHaveProperty(
      "description",
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
    );
  });

  it("should return 400 if pokemon name is not in params", async () => {
    const res = await request(server).get(`${apiUrl}/`);
    expect(res.status).toBe(400);
  });

  it("should return 400 if name param is an empty string", async () => {
    const res = await request(server).get(`${apiUrl}/${""}`);
    expect(res.status).toBe(400);
  });

  it("should return 400 if name has more than 32 char", async () => {
    const name = new Array(50).join("a");
    const res = await request(server).get(`${apiUrl}/${name}`);
    expect(res.status).toBe(400);
  });

  it("should return 404 if pokemon with given name doesn't exist", async () => {
    const res = await request(server).get(`${apiUrl}/foo`);
    expect(res.status).toBe(404);
  });
});
