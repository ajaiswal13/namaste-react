import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
    
    it("Should load Header component with a image", () => {
        render(
            // Added this browser router as we were getting error in the Link component
            <BrowserRouter>
               {/* Added this provider to fix the useSelector error while accessing store */}
               <Provider store={appStore}>  
                  <Header />
               </Provider>
            </BrowserRouter>
        );
        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
    })

    it("Should load Header component with cart item", () => {
        render(
            <BrowserRouter>
               <Provider store={appStore}>  
                  <Header />
               </Provider>
            </BrowserRouter>
        );
        // const text = screen.getByText("Cart(0)"); - Specific text
        const text = screen.getByText(/Cart/); //Using regex
        expect(text).toBeInTheDocument();
    })

     it("Should change login button to logout button", () => {
         render(
             <BrowserRouter>
                 <Provider store={appStore}>
                     <Header />
                 </Provider>
             </BrowserRouter>
         );
         const loginButton = screen.getByRole("button", { name: "Login" })
         fireEvent.click(loginButton);
         const logoutButton = screen.getByRole("button", { name: "Logout" })
         expect(logoutButton).toBeInTheDocument();
    })
});