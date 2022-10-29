import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookList from "../BookList";
import { BrowserRouter } from "react-router-dom";

const MockBookList = () => {
  return (
    <BrowserRouter>
      <BookList />
    </BrowserRouter>
  );
};

describe("BookList Nav Bar", () => {
  test("should render BookList and nav bar component and add author btn", async () => {
    render(<MockBookList />);
    const UpdateBtn = await screen.findByTestId("add-author-btn");
    expect(UpdateBtn).toBeInTheDocument();
  });

  test("should render BookList component with nav bar and add book btn", async () => {
    render(<MockBookList />);
    const addBtn = await screen.findByTestId("add-book-btn");
    expect(addBtn).toBeInTheDocument();
  });
});

describe("BookList", () => {
  test("should render BookList with book card component ", async () => {
    render(<MockBookList />);
    const UpdateBtn = await screen.findByTestId("book-card-0");
    expect(UpdateBtn).toBeInTheDocument();
  });

  test("should render BookList component with book card with title 'Reminders of Him'", async () => {
    render(<MockBookList />);
    const UpdateBtn = await screen.findByText("Reminders of Him");
    expect(UpdateBtn).toBeInTheDocument();
  });
});
