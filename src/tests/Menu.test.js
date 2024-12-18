import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu/Menu";

describe("Menu component", () => {
  test("renders the Profile and Log Out options", () => {
    render(<Menu />);

    const profileHeading = screen.getByText(/Profile/i);
    const logoutHeading = screen.getByText(/Log Out/i);

    expect(profileHeading).toBeInTheDocument();
    expect(logoutHeading).toBeInTheDocument();
  });
});
