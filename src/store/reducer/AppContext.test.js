import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { AppProvider, appStore } from '../reducer/AppContext';

function TestApp(props) {
    const [state, dispatch] = useContext(appStore);
    const updateSearch = () => {
        dispatch({
            type: "UPDATE_SEARCH",
            payload: {
                search: "Test Search",
                searchLocation: "Test SearchLocation",
                location: "Test location"
            }
        })
    }
    const updateResults = () => {
        dispatch({
            type: "GET_RESULTS",
            payload: "Test Results"
        })
    }

    const updateDeviceLocation = () => {
        dispatch({
            type: "UPDATE_DEVICE_LOCATION",
            payload: "Device Location"
        })
    }

    const updateSearchLocation = () => {
        dispatch({
            type: "UPDATE_SEARCH_LOCATION",
            payload: "Search Location"
        })
    }
	return (
		<>
            <div>Results: {JSON.stringify(state.results)}</div>
			<div>Search: {state.search}</div>
			<div>Search Location: {state.searchLocation}</div>
			<div>Device Location: {state.deviceLocation}</div>
            <button onClick={updateSearch}>Dispatch Search</button>
            <button onClick={updateResults}>Dispatch Results</button>
            <button onClick={updateDeviceLocation}>Dispatch Device Location</button>
            <button onClick={updateSearchLocation}>Dispatch Location Search</button>
		</>
	);
}

describe('<App />', () => {
	beforeEach(() => {
		render(
			<AppProvider>
				<TestApp />
			</AppProvider>
		);
	});

	describe('On app load, the initial values of the store are loaded correctly.', () => {
        it('Expects intial results value to be "{}"', () => {
			const initialResultsElement = screen.getByText(/Results: {}/i);
			expect(initialResultsElement).toBeInTheDocument();
        });

		it('Expects intial search value to be "Initial Search"', () => {
			const initialSearchElement = screen.getByText(/Search: Initial Search/i);
			expect(initialSearchElement).toBeInTheDocument();
        });
        
        it('Expects intial searchLocation value to be "37.790590,-122.403060"', () => {
			const initialSearchLocationElement = screen.getByText(/Search Location: 37.790590,-122.403060/i);
			expect(initialSearchLocationElement).toBeInTheDocument();
		});
    });
    
    describe('UPDATE_SEARCH.', () => {
		it('Expects search value to be update" after UPDATE_SEARCH has been dispatched', () => {
            const dispatchElement = screen.getByText(/Dispatch Search/i);
            userEvent.click(dispatchElement);
			const searchElement = screen.getByText(/Search: Test Search/i);
            expect(searchElement).toBeInTheDocument();

            const searchLocationElement = screen.getByText(/Search Location: Test SearchLocation/i);
            expect(searchLocationElement).toBeInTheDocument();
            
            const deviceLocationElement = screen.getByText(/Device Location: Test Location/i);
			expect(deviceLocationElement).toBeInTheDocument();
		});
    });
    
    describe('GET_RESULTS.', () => {
		it('Expects results value to be update" after GET_RESULTS has been dispatched', () => {
            const dispatchElement = screen.getByText(/Dispatch Results/i);
            userEvent.click(dispatchElement);
			const ResultsElement = screen.getByText(/Results: "Test Results"/i);
            expect(ResultsElement).toBeInTheDocument();
		});
    });
    
    describe('UPDATE_DEVICE_LOCATION.', () => {
		it('Expects device location value to be updated after UPDATE_DEVICE_LOCATION has been dispatched', () => {
            const dispatchElement = screen.getByText(/Dispatch Device Location/i);
            userEvent.click(dispatchElement);
			const deviceLocationElement = screen.getByText(/Device Location: Device Location/i);
			expect(deviceLocationElement).toBeInTheDocument();
		});
    });
    

    describe('UPDATE_SEARCH_LOCATION.', () => {
		it('Expects search location value to be updated after UPDATE_SEARCH_LOCATION has been dispatched', () => {
            const dispatchElement = screen.getByText(/Dispatch Location Search/i);
            userEvent.click(dispatchElement);
			const searchLocationElement = screen.getByText(/Search Location: Search Location/i);
            expect(searchLocationElement).toBeInTheDocument();
		});
	});
});
