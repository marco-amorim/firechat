import React from 'react';
import firebase from 'firebase/app';

const ChatMessage = ({ message }) => {
	const auth = firebase.auth();

	const { text, uid, photoURL, sentAt } = message;

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

	return (
		<React.Fragment>
			<div className={`message ${messageClass}`}>
				<span>{sentAt}</span>
				<img src={photoURL} alt="Profile" />
				<p>{text}</p>
			</div>
		</React.Fragment>
	);
};

export default ChatMessage;
