jest.mock("jspdf", () => ({
  jsPDF: jest.fn().mockImplementation(() => ({
    setFontSize: jest.fn(),
    text: jest.fn(),
    save: jest.fn(),
  })),
}));

import { render, screen } from "@testing-library/react";
import DownloadReport from "./DownloadReport";

describe("DownloadReport", () => {
  test("renders download button", () => {
    render(<DownloadReport total={150} />);

    expect(
      screen.getByRole("button", {
        name: /download sustainability report/i,
      })
    ).toBeInTheDocument();
  });
});