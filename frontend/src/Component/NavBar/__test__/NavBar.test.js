import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar";

const MockAuthorForm = () => {
  return <NavBar setNotify={() => {}} setOpen={true} setRefetch={false} />;
};
describe("BookCard", () => {
  test("should render BookCard component", () => {
    render(<MockAuthorForm />);
    const text = screen.getByText(/Add Author/i);
    expect(text).toBeInTheDocument();
  });
});
