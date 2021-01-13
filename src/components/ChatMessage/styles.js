import styled, { css } from 'styled-components';

export const ChatMessagesContainer = styled.div`
	display: flex;
	align-items: center;

	${({ isUserMsgOwner }) => isUserMsgOwner && `flex-direction: row-reverse;`}
`;

export const ChatMessageText = styled.p`
	max-width: 500px;
	margin-bottom: 12px;
	line-height: 24px;
	padding: 10px 20px;
	border-radius: 25px;
	position: relative;
	color: white;
	text-align: center;

	${({ isUserMsgOwner }) => (isUserMsgOwner ? senderText : receiverText)}
`;

export const ChatMessagePicture = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 2px 5px;
`;

export const ChatMessageSentAt = styled.span`
	color: white;
	text-align: right;
	font-size: 14px;
`;

const senderText = css`
	color: white;
	background: #0b93f6;
	align-self: flex-end;
`;

const receiverText = css`
	background: #e5e5ea;
	color: black;
`;
