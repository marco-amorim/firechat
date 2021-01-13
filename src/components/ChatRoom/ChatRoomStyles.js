import styled from 'styled-components';

export const ChatRoomMain = styled.main`
	padding: 10px;
	height: 80vh;
	margin: 10vh 0 10vh;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;

	&::-webkit-scrollbar {
		width: 0.25rem;
	}

	&::-webkit-scrollbar-track {
		background: #1e1e24;
	}

	&::-webkit-scrollbar-thumb {
		background: #6649b8;
	}
`;

export const ChatRoomForm = styled.form`
	height: 10vh;
	position: fixed;
	bottom: 0;
	background-color: rgb(24, 23, 23);
	width: 100%;
	max-width: 728px;
	display: flex;
	font-size: 1.5rem;
`;

export const ChatRoomSendButton = styled.button`
	width: 20%;
	background-color: rgb(56, 56, 143);
`;

export const ChatRoomInput = styled.input`
	line-height: 1.5;
	width: 100%;
	font-size: 1.5rem;
	background: rgb(58, 58, 58);
	color: white;
	outline: none;
	border: none;
	padding: 0 10px;
`;
