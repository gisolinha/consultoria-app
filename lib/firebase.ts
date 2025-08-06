
// /lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2Yncf6nFu35QAdzYFQIBGu75H9Uc3sUw",
  authDomain: "consultoria-dashboard.firebaseapp.com",
  projectId: "consultoria-dashboard",
  storageBucket: "consultoria-dashboard.firebasestorage.app",
  messagingSenderId: "126682339111",
  appId: "1:126682339111:web:03f95bbfa6a0580f5d3b02",
  measurementId: "G-SCMB5GNDNF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <- AQUI está o 'auth'

export { auth }; //
