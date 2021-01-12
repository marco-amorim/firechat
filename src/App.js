import React from 'react';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import './App.css';

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

export default App;
