import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";


describe("Contact Component test cases", () => {
  test("renders contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
  });

  test("should render button in contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
 });

  it("should render placeholder in contact component", () => {
  render(<Contact />);

  const placeholderName = screen.getByPlaceholderText("Your name");

  expect(placeholderName).toBeInTheDocument();
  });

  it("should render 2 placeholder in contact component", () => {
  render(<Contact />);

  const placeholderName = screen.getAllByRole("textbox");

  expect(placeholderName.length).toBe(2);
  });

});

