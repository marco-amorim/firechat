import React from 'react';
import firebase from 'firebase/app';
import { SignInButton } from './SignInStyles';

const SignIn = () => {
	const auth = firebase.auth();
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<SignInButton onClick={signInWithGoogle}>Sign In with Google</SignInButton>
	);
};

export default SignIn;
