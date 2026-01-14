import RestaurantCard from "../src/components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../src/Mocks/resCardsMock.json";

it("should render RestaurantCard component with props", () => {
  render(
    <RestaurantCard resData={MOCK_DATA} />);
    const nameElement = screen.getByText("Pizza Hut");
    expect(nameElement).toBeInTheDocument();

});