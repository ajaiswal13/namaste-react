import { render, screen } from "@testing-library/react"
import RestaurantCard, { withSwiggyOneLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCardData.json"
import "@testing-library/jest-dom"

describe("Restaurant Card component", () => {
    
    it("Should render restaurant card component", () => {
        render(<RestaurantCard resData={MOCK_DATA} />)
        
        const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
        expect(name).toBeInTheDocument();
    })

    // Referred to this: https://www.surevine.com/how-to-test-react-higher-order-component/
    it("Should render restaurant card component with Promoted Label", () => {
        const HOC = withSwiggyOneLabel(RestaurantCard);
        render(<HOC resData={MOCK_DATA} />)
        const labelText = screen.getByText(/Offer available/i);
        expect(labelText).toBeInTheDocument()
    })
})