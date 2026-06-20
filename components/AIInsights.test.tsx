import { render, screen } from "@testing-library/react";
import AIInsights from "./AIInsights";

describe("AIInsights", () => {
  test("renders AI Sustainability Coach heading", () => {
    render(
      <AIInsights
        electricity={100}
        transport={50}
        flights={10}
      />
    );

    expect(
      screen.getByText(/AI Sustainability Coach/i)
    ).toBeInTheDocument();
  });
});