import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSnackBar from "../CustomSnackBar";

const MockCustomSnackBar = () => {
  return (
    <CustomSnackBar
      notify={{ isOpen: true, message: "test message", type: "success" }}
      setNotify={() => {}}
    />
  );
};
describe("CustomSnackBar", () => {
  test("should render BookCard component", () => {
    render(<MockCustomSnackBar />);
    const message = screen.getByText(/test message/i);
    expect(message).toBeInTheDocument();
  });
});
