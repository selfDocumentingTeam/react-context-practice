import React from 'react';
import { InfoCardBody, InfoCardContent, InfoCardTitle, InfoCardLink, TitleLeft } from "../styledComponents";

const InfoCard = (props) => {

    const navigateToLink = () => {
        window.location.assign(props.link);
    }

    return (
        <InfoCardBody>
            <InfoCardTitle >
                <TitleLeft>{props.title}</TitleLeft>
                <InfoCardLink onClick={navigateToLink}>{props.linkText}</InfoCardLink>
            </InfoCardTitle>
            <InfoCardContent>
                {props.content}
            </InfoCardContent>
        </InfoCardBody>
    )
};

export default InfoCard;