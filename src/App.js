import React from 'react';

import { AppProvider } from './store/reducer/AppContext';
import SearchBox from './components/SearchBox';
import StickHeader from './components/StickHeader';
import MainBody from './components/MainBody';
import { SearchContainer } from './styledComponents';

function App() {
	return (
		<AppProvider>
			<StickHeader />
			<SearchContainer>
				<SearchBox />
			</SearchContainer>
			<MainBody />
		</AppProvider>
	);
}

export default App;
