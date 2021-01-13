import React, { useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage';
import firebase from 'firebase/app';
import {
	ChatRoomForm,
	ChatRoomInput,
	ChatRoomMain,
	ChatRoomSendButton,
} from './ChatRoomStyles';

const ChatRoom = () => {
	const auth = firebase.auth();

	const firestore = firebase.firestore();
	const chatBottom = useRef();

	useEffect(() => {
		chatBottom.current.scrollIntoView({ behavior: 'smooth' });
	});

	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const [msgValue, setMsgValue] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		if (!msgValue.replace(/\s/g, '').length) {
			setMsgValue('');
			return;
		}

		const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			text: msgValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
			sentAt: new Date().getHours() + ':' + new Date().getMinutes(),
		});

		setMsgValue('');

		chatBottom.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<ChatRoomMain>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<div ref={chatBottom}></div>
			</ChatRoomMain>

			<ChatRoomForm onSubmit={sendMessage}>
				<ChatRoomInput
					value={msgValue}
					onChange={(event) => setMsgValue(event.target.value)}
				/>
				<ChatRoomSendButton type="submit">💬</ChatRoomSendButton>
			</ChatRoomForm>
		</>
	);
};

export default ChatRoom;
