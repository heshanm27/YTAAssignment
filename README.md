# YTAAssignment

Internship Assignment For the YTA

**Library API Project Discription**<br/>
In this project, users can manage a list of books and users can add new authors and books to the booklist.
Users can also get details about each book. This project , both the frontend and server, is created using MERN stack technologies

server : Node.Js,ExpressJs<br/>
Frontend : React.js<br/>
Database : MongoDB<br/>

**Project Flow**<br/>

- First-time users can view the book list.
- On the navigation bar, the user can add an author or a book.
- After selecting either of the buttons, the user will get a form to fill in.
- After clicking on any book in the book list  user can see additional details about the selected book.
- Inside book details, users have the option to update book or author details.
- When completing the form, the user will be able to update information.

**Library && Packages**

> FrontEnd

- Axios ( make HTTP requests)
- mui (Ui Component)
- react-router-dom (Routing)
  > Testing
  - Default react testing libary(jest)

> Server

- ExpressJs (manage routes)
- cors (cross origin setting configuration)
- dotenv (environment variable)
- express-async-errors (handle async errors)
- http-status-codes (https status codes)
- mongoose (work with mongodb)

  > Testing

  - jest
  - supertest

**_Environment variables _**</br>

` MONGO_URI=MongoDb Atlas Url`</br>
`PORT= Server port ` </br>

> Front End Setup

- `cd frontend `(Change directory to the frontend folder)

- `npm install `(Install all the npm packages)

- `npm start `(Start the development server)

> Server Setup

- `cd server `(Change directory to the server folder)

- `npm install` (Install all the npm packages)

- `npm start || node index.js` (Start the development server)

> Api end points

**Book Route** </br>

- GET - /api/v1/book
- GET - /api/v1/book/:id
- POST - /api/v1/book
- PUT - /api/v1/book/:id

**Author Route** </br>

- GET - /api/v1/author
- GET - /api/v1/author/:id
- POST - /api/v1/author
- PUT - /api/v1/author/:id
