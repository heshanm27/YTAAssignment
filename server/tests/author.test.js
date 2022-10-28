const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

let server;

beforeAll(async () => {
  server = app.listen();
});

afterAll(async () => {
  try {
    server.close();
    await mongoose.disconnect();
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
});
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
  test("should respond a 400 status code", async () => {
    await request(app)
      .get("/api/v1/author/63593f4cb898f98c202078dghg2")
      .expect(400);
  });
});

describe("Add new author  {Post /api/v1/author} route", () => {
  test("should respond a 200 status code", async () => {
    await request(app)
      .post("/api/v1/author")
      .send({
        firstName: "test",
        lastName: "test",
      })
      .expect(200);
  });
});

describe("Add new author without values  {Post /api/v1/author} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .post("/api/v1/author")
      .send({
        firstName: "",
        lastName: "",
      })
      .expect(400);
  });
});

describe("Update  author with id  {Post /api/v1/author:id} route", () => {
  test("should respond a 200 status code", async () => {
    await request(app)
      .put("/api/v1/author/635b86df544b8ed7e3df32dd")
      .send({
        firstName: "Henery",
        lastName: "Smith",
      })
      .expect(200);
  });
});

describe("Update  author with id without values  {Post /api/v1/author:id} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .put("/api/v1/author/635b86df544b8ed7e3df32dd")
      .send({
        firstName: "",
        lastName: "",
      })
      .expect(400);
  });
});

describe("Update  author with invalid id  {Post /api/v1/author:id} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .put("/api/v1/author/635b86df544b8ed7e3df32ddssssss")
      .send({
        firstName: "",
        lastName: "",
      })
      .expect(400);
  });
});
