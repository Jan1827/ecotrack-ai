import { render, screen } from "@testing-library/react";
import GoalTracker from "./GoalTracker";

describe("GoalTracker", () => {
  test("shows progress for low emissions", () => {
    render(<GoalTracker currentEmission={100} />);

    expect(
      screen.getByText(/Progress/i)
    ).toBeInTheDocument();
  });

  test("shows target text", () => {
    render(<GoalTracker currentEmission={150} />);

    expect(
      screen.getByText(/Target/i)
    ).toBeInTheDocument();
  });
});