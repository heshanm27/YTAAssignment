const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

describe("GET all the books from {GET /api/v1/book} route ", () => {
  test("should respond a 200 status code", async () => {
    await request(app).get("/api/v1/book").expect(200);
  });
});

describe("GET one book  details by id {GET /api/v1/book:id} route ", () => {
  test("should respond a 200 status code", async () => {
    await request(app).get("/api/v1/book/635948b332d393dfbc166936").expect(200);
  });
});

describe("Pass non exsist book id into {GET /api/v1/book:id} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .get("/api/v1/book/635948b332d393dfbc166936ffff")
      .expect(400);
  });
});

describe("Add new book  {Post /api/v1/book} route", () => {
  test("should respond a 200 status code", async () => {
    await request(app)
      .post("/api/v1/book")
      .send({
        title: "Reminders of Him",
        isbn: "978-1542025607",
        author: "63593de8b898f98c202078da",
      })
      .expect(200);
  });
});

describe("Add new book without values  {Post /api/v1/book} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .post("/api/v1/book")
      .send({
        title: "",
        isbn: "",
        author: "",
      })
      .expect(400);
  });
});

describe("Add new book with existing isbn  {Post /api/v1/book} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .post("/api/v1/book")
      .send({
        title: "It Ends with Us",
        isbn: "978-1501110368",
        author: "635b9a87fab14bf0712f1133",
      })
      .expect(400);
  });
});

describe("Update  book with id  {Post /api/v1/book:id} route", () => {
  test("should respond a 200 status code", async () => {
    await request(app)
      .put("/api/v1/book/635948b332d393dfbc166936")
      .send({
        title: "Reminders of Him",
        isbn: "978-1542025607",
        author: "63593de8b898f98c202078da",
      })
      .expect(200);
  });
});

describe("Update  book with id without values  {Post /api/v1/book:id} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .put("/api/v1/book/635b86df544b8ed7e3df32dd")
      .send({
        title: "",
        isbn: "",
        author: "",
      })
      .expect(400);
  });
});

describe("Update  book with invalid id  {Post /api/v1/book:id} route", () => {
  test("should respond a 400 status code", async () => {
    await request(app)
      .put("/api/v1/book/635b86df544b8ed7e3df32ddssssss")
      .send({
        title: "Reminders of Him",
        isbn: "978-1542025607",
        author: "63593de8b898f98c202078da",
      })
      .expect(400);
  });
});
