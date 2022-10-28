const request = require("supertest");
const app = require("../index");

describe("GET all the authors from {GET /api/v1/author} route ", () => {
  test("should respond a 200 status code", async () => {
    await request(app).get("/api/v1/author").expect(200);
  });
});

describe("GET one author details by id {GET /api/v1/author:id} route ", () => {
  test("should respond a 200 status code", async () => {
    await request(app)
      .get("/api/v1/author/63593f4cb898f98c202078dd")
      .expect(200);
  });
});

describe("Pass non exsist author id into {GET /api/v1/author:id} route", () => {
  test("should respond a 404 status code", async () => {
    await request(app)
      .get("/api/v1/author/63593f4cb898f98c2020782k9")
      .expect(404);
  });
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
