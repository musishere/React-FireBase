import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../firebase/FireBase.js';

const authenticate = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signInUser = () => {
		signInWithEmailAndPassword(authenticate, email, password).then(() =>
			console.log('Sign in successfull')
		);
	};

	const signInwithGoogle = () => {
		console.log('hello');
		signInWithPopup(authenticate, googleAuthProvider).then((res) => {
			console.log('Logged with google');
		});
	};

	return (
		<div>
			<h1>Sign In</h1>
			<label>Email</label>
			<input
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				type='email'
				placeholder='Enter Your Email'
			/>
			<label>Password</label>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type='password'
				placeholder='Enter Your Password'
			/>
			<br></br>
			<button onClick={signInwithGoogle}>Sign in with google</button>
			<button onClick={() => signInUser}>Sign in</button>
		</div>
	);
};
