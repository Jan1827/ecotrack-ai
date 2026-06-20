import { render, screen } from "@testing-library/react";
import GoalTracker from "./GoalTracker";

describe("GoalTracker", () => {
  test("renders target text", () => {
    render(<GoalTracker currentEmission={150} />);

    expect(
      screen.getByText(/Target:/i)
    ).toBeInTheDocument();
  });

  test("shows progress percentage", () => {
    render(<GoalTracker currentEmission={100} />);

    expect(
      screen.getByText(/Progress:/i)
    ).toBeInTheDocument();
  });

  test("renders goal heading", () => {
    render(<GoalTracker currentEmission={100} />);

    expect(
      screen.getByText(/Sustainability Goal/i)
    ).toBeInTheDocument();
  });
});