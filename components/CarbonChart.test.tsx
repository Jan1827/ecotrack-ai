import { render, screen } from "@testing-library/react";
import CarbonChart from "./CarbonChart";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: any) => children,
  PieChart: ({ children }: any) => children,
  Pie: ({ children }: any) => children,
  Tooltip: () => <div>Tooltip</div>,
  Cell: () => <div>Cell</div>,
}));

describe("CarbonChart", () => {
  test("renders chart heading", () => {
    render(
      <CarbonChart
        electricity={100}
        transport={50}
        flights={20}
      />
    );

    expect(
      screen.getByText(/Emission Breakdown/i)
    ).toBeInTheDocument();
  });

  test("renders chart description", () => {
    render(
      <CarbonChart
        electricity={100}
        transport={50}
        flights={20}
      />
    );

    expect(
      screen.getByText(
        /Distribution of emissions/i
      )
    ).toBeInTheDocument();
  });
});