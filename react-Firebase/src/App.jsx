import './App.css';
import { app } from './firebase/FireBase.js';

import {
	Firestore,
	addDoc,
	collection,
	doc,
	getDoc,
	getFirestore,
} from 'firebase/firestore';

const fireStore = getFirestore(app);
const App = () => {
	const writeData = async () => {
		const result = await addDoc(collection(fireStore, 'citites'), {
			name: 'Lahore',
			pinCode: 1234,
		});

		console.log(result);
	};

	const writeSubData = async () => {
		await addDoc(collection(fireStore, 'cities/SJWpzD0DKQGCHryQvm35/places'), {
			name: 'THOKAR',
			pincode: 12345,
		});
	};

	const getDocument = async () => {
		const ref = doc(Firestore, 'cities', 'SJWpzD0DKQGCHryQvm35');
		const snapData = await getDoc(ref);

		console.log(snapData);
	};

	return (
		<div>
			<h1>FireBase Store</h1>
			<button onClick={writeData}>Put Data in Firestore Data Base</button>
			<button onClick={writeSubData}>Put SubData in Firestore Data Base</button>
			<button onClick={getDocument}>Get Data from document</button>
		</div>
	);
};

export default App;
