import styled from 'styled-components';

export const AppHeader = styled.header`
	background-color: #181717;
	height: 10vh;
	min-height: 50px;
	color: white;
	position: fixed;
	width: 100%;
	max-width: 728px;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 99;
	padding: 10px;
	box-sizing: border-box;
`;

export const AppSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	background-color: rgb(40, 37, 53);
`;

export const AppContainer = styled.div`
	text-align: center;
	max-width: 728px;
	margin: 0 auto;
`;
