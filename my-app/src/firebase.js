import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnNEXwitYI-qwP4wt3vEryp92fQ6voYUU",
  authDomain: "appp-feb08.firebaseapp.com",
  projectId: "appp-feb08",
  storageBucket: "appp-feb08.appspot.com",
  messagingSenderId: "555384424846",
  appId: "1:555384424846:web:54e7969b7abbe1be6b3cdf",
  measurementId: "G-1TW39QDQ52"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);