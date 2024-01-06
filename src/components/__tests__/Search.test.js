import Body from "../Body"
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/listOfRestaurantsMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
           return Promise.resolve(MOCK_DATA)
        }
      }
    )
    //Explanation : In resolve method we are passing an object containing key named 'json' and this
    // 'json' is actually a function which returns a promise
})

describe("Test the search functionality", () => {
    
    it('should search restaurants serving Pizza', async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))
        const cardsBefore = screen.getAllByTestId("resCard");
        expect(cardsBefore.length).toBe(20);

        const searchBtn = screen.getByRole("button", { name: "Search" })
        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, { target: { value: "pizza" } })
        fireEvent.click(searchBtn);

        const cardsAfter = screen.getAllByTestId("resCard");
        expect(cardsAfter.length).toBe(2);
    })

    it('should search top rated restaurants', async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))
        const cardsBeforeFilter = screen.getAllByTestId("resCard");
        expect(cardsBeforeFilter.length).toBe(20);

        const topRatedBtn = screen.getByRole("button", {
           name: "Top Rated Restaurants",
        });
        fireEvent.click(topRatedBtn);

        const cardsAfterFilter = screen.getAllByTestId("resCard");
        expect(cardsAfterFilter.length).toBe(14);
    })
})