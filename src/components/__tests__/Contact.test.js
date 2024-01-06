import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page", () => {

    it("Should load contact component", () => {
         render(<Contact />);
         const heading = screen.getByRole("heading");
       expect(heading).toBeInTheDocument();
    });

    it("Should load 2 input text box", () => {
       render(<Contact />);
       const inputBoxes = screen.getAllByRole("textbox");
       expect(inputBoxes.length).toBe(2);
    }); 
});
