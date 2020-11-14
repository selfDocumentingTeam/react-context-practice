import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StickyHeader from '../components/StickHeader';
import { AppProvider } from '../store/reducer/AppContext';

describe('<StickyHeader />', () => {
	describe('On app load, the StickyHeader renders the right elements.', () => {
		it('Has a Menu Title', () => {
			render(<StickyHeader />);
			const titleElement = screen.getByText(/Things Nearby: Powered by Foursquare/i);
			expect(titleElement).toBeInTheDocument();
		});
		it('Has a location field', () => {
			render(
				<AppProvider>
					<StickyHeader isDefaultSticky />
				</AppProvider>
			);
			const searchElement = screen.getByTestId(/fixed-title/i);
			expect(searchElement).toBeInTheDocument();
		});
	});
});
