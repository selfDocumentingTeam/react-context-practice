import React, { useContext, useState } from 'react';
import { appStore } from '../store/reducer/AppContext';
import { updateSearch, updateDeviceLocation } from '../store/actions';
import { SearchInput, SearchForm, SearchFlex } from '../styledComponents';

function SearchBox(props) {
	const [state, dispatch] = useContext(appStore);

	const [search, setSearch] = useState('');
	const [searchLocation, setSearchLocation] = useState('');
	const [devLocation, setDevLocation] = useState('');

	async function onSubmit(e) {
		e.preventDefault();
		updateSearch(search, devLocation, searchLocation, dispatch);
	}
	const onKeyChange = (type) => {
		return (e) => {
			if (type == 'location') {
				setSearchLocation(e.target.value);
			} else {
				setSearch(e.target.value);
			}
		};
	};

	const setDeviceLocation = (position) => {
		const latitude = position?.coords?.latitude;
		const longitude = position?.coords?.longitude;
		if (latitude && longitude) {
			setDevLocation(`${latitude},${longitude}`);
			updateDeviceLocation(`${latitude},${longitude}`, dispatch);
		}
	};
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(setDeviceLocation);
	}
	return (
		<SearchFlex header={props.header}>
			<SearchForm onSubmit={onSubmit} header={props.header}>
				<SearchInput
					placeholder={'What are you looking for?'}
					type="text"
					value={search}
					onChange={onKeyChange('search')}
				/>
			</SearchForm>
			<SearchForm onSubmit={onSubmit} header={props.header}>
				<SearchInput
					placeholder={'Use Current location or Enter Location'}
					type="text"
					value={searchLocation}
					onChange={onKeyChange('location')}
				/>
			</SearchForm>
		</SearchFlex>
	);
}

export default SearchBox;
