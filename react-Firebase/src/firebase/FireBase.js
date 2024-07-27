import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDV-GZ0btUDCv6ssZU8LOqOvBcXMIMxTCo',
	authDomain: 'app-723db.firebaseapp.com',
	databaseURL: 'https://app-723db-default-rtdb.firebaseio.com',
	projectId: 'app-723db',
	storageBucket: 'app-723db.appspot.com',
	messagingSenderId: '30864608334',
	appId: '1:30864608334:web:2c6e3c76cb2524bde5071f',
};

export const app = initializeApp(firebaseConfig);
