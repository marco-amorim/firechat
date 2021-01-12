import React from 'react';
import firebase from 'firebase/app';

const ChatMessage = ({ message }) => {
	const auth = firebase.auth();

	const { text, uid, photoURL } = message;

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL} alt="Profile" />
			<p>{text}</p>
		</div>
	);
};

export default ChatMessage;
