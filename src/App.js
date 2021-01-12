import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyB_Aci0e7uG1VQQgpM9HBzkVOHeB0r52h0',
	authDomain: 'firechat-b2d50.firebaseapp.com',
	projectId: 'firechat-b2d50',
	storageBucket: 'firechat-b2d50.appspot.com',
	messagingSenderId: '578815241324',
	appId: '1:578815241324:web:b3b1fda94d67127300fc49',
	measurementId: 'G-XLPZ3KPF8F',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App">
			<header className="App-header">
				<h1>FireChat 🔥💬</h1>
				<SignOut />
			</header>
			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
}

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return <button onClick={signInWithGoogle}>Sign In with Google</button>;
}

function SignOut() {
	return (
		auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
	);
}

function ChatRoom() {
	const chatBottom = useRef();

	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const [msgValue, setMsgValue] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			text: msgValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});

		setMsgValue('');

		chatBottom.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<div ref={chatBottom}></div>
			</main>

			<form onSubmit={sendMessage}>
				<input
					value={msgValue}
					onChange={(event) => setMsgValue(event.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</>
	);
}

function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL} alt="" />
			<p>{text}</p>
		</div>
	);
}

export default App;
