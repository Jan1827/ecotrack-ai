import { render, screen } from "@testing-library/react";
import StatsCards from "./StatsCards";

describe("StatsCards", () => {
  test("shows carbon footprint value", () => {
    render(<StatsCards total={150} />);

    expect(
      screen.getByText("150")
    ).toBeInTheDocument();
  });

  test("shows Green Hero for low emissions", () => {
    render(<StatsCards total={100} />);

    expect(
      screen.getByText(/Green Hero/i)
    ).toBeInTheDocument();
  });

  test("shows Explorer for medium emissions", () => {
    render(<StatsCards total={300} />);

    expect(
      screen.getByText(/Explorer/i)
    ).toBeInTheDocument();
  });

  test("shows Carbon Heavy for high emissions", () => {
    render(<StatsCards total={500} />);

    expect(
      screen.getByText(/Carbon Heavy/i)
    ).toBeInTheDocument();
  });
});