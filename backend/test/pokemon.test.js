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
      "It can freely recombine its own cellular structure to\ntransform into other life-forms."
    );
  });
});
