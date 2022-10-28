import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomeDialog from "../CustomDialog";

const MockCustomDialog = () => {
  return (
    <CustomeDialog
      children={<></>}
      open={true}
      setOpen={() => {}}
      title="test dialog"
    />
  );
};
describe("BookCard", () => {
  test("should render BookCard component", () => {
    render(<MockCustomDialog />);
    const title = screen.getByText(/test dialog/i);
    expect(title).toBeInTheDocument();
  });
});
