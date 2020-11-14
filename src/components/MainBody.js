import React, { useContext, useState } from 'react';
import { appStore } from '../store/reducer/AppContext';
import { MainBodyContainer, LocationHeader } from '../styledComponents';
import InfoCard from "./InfoCard";

function MainBody() {
	const [state, dispatch] = useContext(appStore);

	function getLocationHeader() {
		if (state?.results?.headerLocation) {
			return <LocationHeader>{state.results.headerLocation}</LocationHeader>;
		}
	}

	function getPlaces() {
		if (state?.results?.groups) {
			return state.results.groups[0].items.map((item) => {
                const category = item?.venue?.categories[0].shortName
                const ll = item.venue.location.labeledLatLngs.find(longlat => longlat.label === "display");
                const address = item.venue.location.formattedAddress
                const content = (
                <div>
                    {category && <div>Category: {category}</div>}
                    <br/>
                {address.map(addy => <div>{addy}</div>)}                    
                </div>)
                const url = `https://www.google.com/maps/dir/?api=1&origin=${state.deviceLocation || state.location }&destination=${ll.lat + "," + ll.lng}`
                return <InfoCard title={item.venue.name} link={url} linkText={"Directions"} content={content}/>
			});
		}
	}

	return (
		<MainBodyContainer>
			{getLocationHeader()}
			{getPlaces()}
		</MainBodyContainer>
	);
}

export default MainBody;
