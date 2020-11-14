import styled from 'styled-components';

export const MainBodyContainer = styled.div`
	margin: 0 auto;
	padding: 10px 20px;
`;

export const LocationHeader = styled.h1`
	margin: 0 auto;
`;

export const SearchContainer = styled.div`
	margin: 100px auto 50px;
	width: 400px;
	height: 100px;
	padding: 20px;
	border-radius: 10px;
`;

export const SearchFlex = styled.div`
	display: ${(props) => (props.header ? 'flex' : 'inline')};
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 10px;
	margin: 5px 0;
	box-shadow: 1px -1px 5px 4px rgba(0, 0, 0, 0.21);
    background-color: none;
    padding: 0px 20px;
`;

export const SearchForm = styled.form`
    width: ${props => props.header ? "300px" : "100%"};
	display: ${(props) => (props.header ? 'inline-block' : 'block')};
	margin: ${(props) => (props.header ? '0 30px' : '5px 0')};
`;

export const TitleLeft = styled.span`
	@media only screen and (max-width: 479px) {
		width: 200px;
	}
`;

export const InputLabel = styled.label`
	font-weight: 550;
`;

export const CenteredBold = styled.div`
	font-weight: bolder;
	text-align: center;
	margin-bottom: 5px;
`;

export const PageTitle = styled.h1`
	text-align: center;
`;

/** INFO CARD Stuff */

export const InfoCardContent = styled.div`
	padding: 18px;
	display: none;
	overflow: hidden;
	background-color: #f1f1f1;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const InfoCardTitle = styled.div`
	color: white;
	padding: 10px 0 20px 20px;
`;

export const InfoCardBody = styled.div`
	border: 1px solid black;
	padding-top: 10px;
	border-radius: 10px;
	margin: 10px 0;
	box-shadow: 2px 2px 9px -2px rgba(255, 255, 255, 1);
	transition: height 0.5s ease-in-out;
	background-color: black;

	&:active,
	&:hover ${InfoCardContent} {
		display: block;
	}
`;

export const InfoCardLink = styled.div`
	float: right;
	text-decoration: underline;
	color: white;
	padding: 0px 20px;
`;

/** Header Stuff */

export const FixedMenu = styled.div`
	overflow: hidden;
	position: fixed;
	top: 0;
	background-color: none;
	color: black;
	padding: 10px;
	width: 100%;
	box-shadow: 0 4px 6px -6px #222;
	background-color: rgb(255, 255, 255, 0.8);
`;

export const StartingMenu = styled.div`
	overflow: hidden;
	position: fixed;
	top: 0;
	background-color: none;
	color: white;
	padding: 10px;
	width: 100%;
`;

export const MenuTitleStarting = styled.div`
	float: left;
	color: black;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
	font-weight: bolder;
`;

export const MenuTitle = styled(MenuTitleStarting)`
	width: 1000px;
`;

//** Mobile Responsive Stuff */

export const Small = styled.div`
	display: none;
	@media only screen and (max-width: 479px) {
		display: block;
	}
`;

export const Medium = styled.div`
	display: none;
	@media only screen and (min-width: 480px) and (max-width: 767px) {
		display: block;
	}
`;

export const Large = styled.div`
	display: none;
	@media only screen and (min-width: 768px) {
		display: block;
	}
`;
