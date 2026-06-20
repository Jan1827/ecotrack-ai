import { render, screen } from "@testing-library/react";
import StatsCards from "./StatsCards";

describe("StatsCards", () => {
  test("renders without crashing", () => {
    render(<StatsCards total={250} />);

    expect(
      screen.getByText(/kg/i)
    ).toBeInTheDocument();
  });
});