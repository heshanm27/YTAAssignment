import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar";

const MockAuthorForm = () => {
  return <NavBar setNotify={() => {}} setOpen={true} setRefetch={false} />;
};
describe("BookCard", () => {
  test("should render Nav Bar component and button", () => {
    render(<MockAuthorForm />);
    const text = screen.getByText(/Add Author/i);
    expect(text).toBeInTheDocument();
  });

  test("should render Nav Bar and  component button", () => {
    render(<MockAuthorForm />);
    const text = screen.getByText(/Add Book/i);
    expect(text).toBeInTheDocument();
  });
});
