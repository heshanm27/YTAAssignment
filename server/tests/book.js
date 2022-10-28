const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

afterAll(async () => {
  try {
    app.listen(6000).close();
    await mongoose.disconnect();
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
});

describe("GET all the book from {GET /api/v1/book} route ", () => {
  test("should respond a 200 status code", async () => {
    await request(app).get("/api/v1/book").expect(200);
  });
});

// describe("GET one author details by id {GET /api/v1/author:id} route ", () => {
//   test("should respond a 200 status code", async () => {
//     await request(app)
//       .get("/api/v1/author/63593f4cb898f98c202078dd")
//       .expect(200);
//   });
// });

// describe("Pass non exsist author id into {GET /api/v1/author:id} route", () => {
//   test("should respond a 404 status code", async () => {
//     await request(app)
//       .get("/api/v1/author/63593f4cb898f98c202078d2")
//       .expect(404);
//   });
// });
