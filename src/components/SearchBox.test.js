import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { AppProvider } from "../store/reducer/AppContext";
import SearchBox from "../components/SearchBox";
import App from "../App";

describe('<SearchBox />', () => {

	describe('On app load, the searchbox contains the search boxes.', () => {
        it("Has a search field", () => {
            render(<AppProvider><SearchBox /></AppProvider>);
            const searchElement = screen.getByPlaceholderText(/What are you looking for?/i);
            expect(searchElement).toBeInTheDocument();
        })
        it("Has a location field", () => {
            render(<AppProvider><SearchBox /></AppProvider>);
            const searchElement = screen.getByPlaceholderText(/Use Current location or Enter Location/i);
            expect(searchElement).toBeInTheDocument();
        })
    });
    
    // describe('On app load, the searchbox contains the search boxes.', () => {
    //     it("Has a search field", async () => {
    //         render(<App/>);
    //         const searchElement = screen.getByPlaceholderText(/What are you looking for?/i);
    //         const locationElement = screen.getByPlaceholderText(/Use Current location or Enter Location/i);
    //         userEvent.type(searchElement, "Food");
    //         userEvent.type(locationElement, "Oakland");
    //         fireEvent.submit(searchElement)
    //         await waitFor(() => !!screen.getByText(/Cholita Linda/i))
    //         const place = screen.getByText(/Cholita Linda/i);
    //         expect(place).toBeInTheDocument();
    //     })
    //     it("Has a location field", () => {
    //         const searchElement = screen.getByPlaceholderText(/Use Current location or Enter Location/i);
    //         expect(searchElement).toBeInTheDocument();
    //     })
	// });
});
