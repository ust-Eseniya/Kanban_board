import { render, screen, fireEvent } from "@testing-library/react";
import { AddCard } from "../components/AddCard/AddCard.tsx";

describe("AddCard component", () => {
  test("renders the + Add Card button", () => {
    render(<AddCard onClick={() => {}} />);

    const buttonElement = screen.getByText(/\+ Add Card/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();

    render(<AddCard onClick={handleClick} />);

    const buttonElement = screen.getByText(/\+ Add Card/i);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
