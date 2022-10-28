import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookForm from "../BookForm";

const MockAuthorForm = () => {
  return (
    <BookForm
      book={{
        title: "test title",
        isbn: "test isbn",
        author: { _id: "635b9bc311398d8b2d7c33f3" },
      }}
      setNotify={() => {}}
      setOpen={true}
      setRefetch={false}
    />
  );
};

const MockAddAuthorForm = () => {
  return <BookForm setNotify={() => {}} setOpen={true} setRefetch={false} />;
};
describe("BookForm", () => {
  test("should render BookForm component and update btn", async () => {
    render(<MockAuthorForm />);
    const UpdateBtn = await screen.findByTestId("UpdateBtn");
    expect(UpdateBtn).toBeInTheDocument();
  });

  test("should render BookForm component and add btn", async () => {
    render(<MockAddAuthorForm />);
    const addBtn = await screen.findByTestId("addBtn");
    expect(addBtn).toBeInTheDocument();
  });

  test("should render BookForm component and title text box", async () => {
    render(<MockAddAuthorForm />);
    const titleTxtBox = await screen.findByTestId("titleTxtBox");
    expect(titleTxtBox).toBeInTheDocument();
  });

  test("should render BookForm component and isbn text box", async () => {
    render(<MockAddAuthorForm />);
    const isbnTxtBox = await screen.findByTestId("isbnTxtBox");
    expect(isbnTxtBox).toBeInTheDocument();
  });
});
