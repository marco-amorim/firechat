import React from 'react';
import firebase from 'firebase/app';
import {
	ChatMessagePicture,
	ChatMessagesContainer,
	ChatMessageSentAt,
	ChatMessageText,
} from './ChatMessagesStyles';

const ChatMessage = ({ message }) => {
	const auth = firebase.auth();

	const { text, uid, photoURL, sentAt } = message;

	const isMsgOwner = uid === auth.currentUser.uid;

	return (
		<React.Fragment>
			<ChatMessagesContainer isUserMsgOwner={isMsgOwner}>
				<ChatMessageSentAt>{sentAt}</ChatMessageSentAt>
				<ChatMessagePicture src={photoURL} alt="Profile" />
				<ChatMessageText isUserMsgOwner={uid === auth.currentUser.uid}>
					{text}
				</ChatMessageText>
			</ChatMessagesContainer>
		</React.Fragment>
	);
};

export default ChatMessage;
