import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../firebase/FireBase.js';

const authenticate = getAuth(app);

export const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signUpUser = () => {
		createUserWithEmailAndPassword(authenticate, email, password).then((res) =>
			console.log('Sign Up successfull')
		);
	};

	return (
		<div>
			<h1>Sign Up</h1>
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
			<button onClick={signUpUser}>Sign Up</button>
		</div>
	);
};
