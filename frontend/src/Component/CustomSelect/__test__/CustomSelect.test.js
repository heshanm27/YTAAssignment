import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSelect from "../CustomSelect";

const MockCustomSelect = () => {
  return (
    <CustomSelect
      options={[]}
      label="test select"
      value="testvalue"
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
    const name = screen.getByText(/test select/i);
    expect(name).toBeInTheDocument();
  });
});
