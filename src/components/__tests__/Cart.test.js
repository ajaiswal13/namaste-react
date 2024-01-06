import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe('Cart functionality', () => {
    it('Should add items to cart', async () => {
        await act(async () => render(
            <BrowserRouter>
              <Provider store={appStore}>
                <RestaurantMenu />
                <Header/>
              </Provider>
            </BrowserRouter>
        ))
        // const accordianHeader = screen.getByText("Leon Gourmet ( Burgers and Sides ) (10)");
        expect(screen.getAllByTestId("listOfItems").length).toBe(10);
        
        const addBtns = screen.getAllByRole("button", { name: "Add +" });
        fireEvent.click(addBtns[0]);

        const text = screen.getByText("Cart(1)");
        expect(text).toBeInTheDocument();

        expect(screen.getAllByTestId("listOfItems").length).toBe(11);

    })
})