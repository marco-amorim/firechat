import React from 'react';
import firebase from 'firebase/app';

const SignIn = () => {
	const auth = firebase.auth();
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return <button onClick={signInWithGoogle}>Sign In with Google</button>;
};

export default SignIn;
