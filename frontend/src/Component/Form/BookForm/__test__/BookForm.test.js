import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookForm from "../BookForm";

const MockAuthorForm = () => {
  return (
    <BookForm
      book={{
        title: "test title",
        isbn: "test isbn",
        author: { _id: "test id" },
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
describe("BookCard", () => {
  test("should render BookCard component and update btn", async () => {
    render(<MockAuthorForm />);
    const text = await screen.findByTestId("UpdateBtn");
    expect(text).toBeInTheDocument();
  });

  test("should render BookCard component and add btn", async () => {
    render(<MockAddAuthorForm />);
    const text = await screen.findByTestId("addBtn");
    expect(text).toBeInTheDocument();
  });
});
