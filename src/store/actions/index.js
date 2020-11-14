import React, { useContext } from 'react';
const axios = require("axios");

export function createOptions(verb, body) {
	const options = {
		method: verb,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
        },
		cache: 'no-store',
		referrerPolicy: 'no-referrer',
		mode: 'cors',
	};
	if (body) {
		options.body = JSON.stringify(body);
	}
	return options;
}

export async function checkStatus(response) {
	if (response && response.status >= 200 && response.status < 300) {
		return response;
	}
	const errorData = await parseJSON(response);

	const error = Error(response.statusText);
	error.response = response;
	error.status = response.status;
	error.errorData = errorData;
	throw error;
}

export async function parseJSON(response) {
	return response.json ? response.json().catch(() => response) : response;
}

function updateSearch(search, location, searchLocation, dispatch) {
	dispatch({
		type: 'UPDATE_SEARCH',
		payload: {search, location, searchLocation },
	});
	const options = createOptions('GET');
	const fullUrl = searchLocation ? `/api/explore?near=${searchLocation}&query=${search}` : `/api/explore?ll=${location}&query=${search}`
	fetch(fullUrl, options)
		.then(parseJSON)
		.then((data) => {
			dispatch({
				type: "GET_RESULTS",
				payload: data.response
			})
		});
}

const updateDeviceLocation = (location, dispatch) => {
	dispatch({
		type: 'UPDATE_DEVICE_LOCATION',
		payload: location,
	});
};

const updateSearchLocation = (location, dispatch) => {
	dispatch({
		type: 'UPDATE_SEARCH_LOCATION',
		payload: location,
	});
}

export { updateSearch, updateDeviceLocation, updateSearchLocation };
