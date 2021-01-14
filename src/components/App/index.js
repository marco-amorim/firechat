import React from 'react';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import ChatRoom from '../ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { AppContainer, AppHeader, AppSection } from './styles';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function App() {
	const [user] = useAuthState(auth);

	return (
		<AppContainer>
			<AppHeader>
				<h1>FireChat 🔥💬</h1>
				<SignOut />
			</AppHeader>
			<AppSection>{user ? <ChatRoom /> : <SignIn />}</AppSection>
		</AppContainer>
	);
}

export default App;
