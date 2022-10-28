import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookCard from "../BookCard";
import { BrowserRouter } from "react-router-dom";

const MockBookCard = () => {
  return (
    <BrowserRouter>
      <BookCard title="card title" isbn="isbn" id="bookid" />
    </BrowserRouter>
  );
};
describe("BookCard", () => {
  test("should render BookCard component", () => {
    render(<MockBookCard />);
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();
  });
});
