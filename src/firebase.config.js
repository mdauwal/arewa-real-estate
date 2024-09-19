import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAk1M3PNpoReIjcUUAGVPMpPErgPnFdyY0",
  authDomain: "ardent-particle-408017.firebaseapp.com",
  projectId: "ardent-particle-408017",
  storageBucket: "ardent-particle-408017.appspot.com",
  messagingSenderId: "111197201263",
  appId: "1:111197201263:web:20dbbe1aee1c12391ffe9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);  // Export Firebase Auth
