import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AuthorForm from "../AuthorForm";

const MockAuthorForm = () => {
  return (
    <AuthorForm
      author="id"
      setNotify={() => {}}
      setOpen={true}
      setRefetch={false}
    />
  );
};
describe("BookCard", () => {
  test("should render BookCard component", () => {
    render(<MockAuthorForm />);
    const text = screen.getByText(/Update Author/i);
    expect(text).toBeInTheDocument();
  });
});
