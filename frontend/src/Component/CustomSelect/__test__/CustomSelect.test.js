import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSelect from "../CustomSelect";

const MockCustomSelectOptions = [
  { firstName: "George R. R.", lastName: "Martin", _id: "George R. R. Martin" },
  { firstName: "J. R. R.", lastName: "Tolkien", _id: "George R. R. Martin" },
];

const MockCustomSelect = () => {
  return (
    <CustomSelect
      options={MockCustomSelectOptions}
      label="test select"
      value={"George R. R. Martin"}
      handleChanges={() => {}}
      name="test select name"
      helperText={"test helper text"}
      error={false}
      variant="standard"
    />
  );
};
describe("BookCard", () => {
  test("should render BookCard component", () => {
    render(<MockCustomSelect />);
    const label = screen.getByText(/test select/i);
    expect(label).toBeInTheDocument();
  });
});
