import { render, screen } from "@testing-library/react";
import CarbonScore from "./CarbonScore";

describe("CarbonScore", () => {
  test("shows Green Hero for low emissions", () => {
    render(<CarbonScore total={100} />);
    expect(screen.getByText(/Green Hero/i)).toBeInTheDocument();
  });

  test("shows Eco Explorer for medium emissions", () => {
    render(<CarbonScore total={300} />);
    expect(screen.getByText(/Eco Explorer/i)).toBeInTheDocument();
  });

  test("shows Carbon Heavy for high emissions", () => {
    render(<CarbonScore total={500} />);
    expect(screen.getByText(/Carbon Heavy/i)).toBeInTheDocument();
  });
});