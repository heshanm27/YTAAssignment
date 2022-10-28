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

const MockAuthorAddForm = () => {
  return <AuthorForm setNotify={() => {}} setOpen={true} setRefetch={false} />;
};
describe("AuthorForm", () => {
  test("should render AuthorForm component and update btn", () => {
    render(<MockAuthorForm />);
    const updateBtn = screen.getByText(/Update Author/i);
    expect(updateBtn).toBeInTheDocument();
  });

  test("should render AuthorForm component and add btn", () => {
    render(<MockAuthorAddForm />);
    const addBtn = screen.getByText(/Add Author/i);
    expect(addBtn).toBeInTheDocument();
  });

  test("should render AuthorForm component and firstName text box", () => {
    render(<MockAuthorForm />);
    const firstNameTxtBox = screen.getByTestId("firstNameTxtBox");
    expect(firstNameTxtBox).toBeInTheDocument();
  });

  test("should render AuthorForm component and lastName text box", () => {
    render(<MockAuthorForm />);
    const lastNameTxtBox = screen.getByTestId("lastNameTxtBox");
    expect(lastNameTxtBox).toBeInTheDocument();
  });
});
