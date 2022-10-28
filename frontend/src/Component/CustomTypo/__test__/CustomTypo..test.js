import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTypo from "../CustomTypo";

const MockCustomTypo = () => {
  return <CustomTypo text={"test text"} align={"center"} />;
};
describe("BookCard", () => {
  test("should render BookCard component", () => {
    render(<MockCustomTypo />);
    const text = screen.getByText(/test text/i);
    expect(text).toBeInTheDocument();
  });
});
