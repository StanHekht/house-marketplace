import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9y_E8JQk3ATJ4n4_PL-oxJQB3uw3orT4',
  authDomain: 'house-marketplace-app-baac6.firebaseapp.com',
  projectId: 'house-marketplace-app-baac6',
  storageBucket: 'house-marketplace-app-baac6.appspot.com',
  messagingSenderId: '562566910330',
  appId: '1:562566910330:web:252811779db17456db06c3',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
