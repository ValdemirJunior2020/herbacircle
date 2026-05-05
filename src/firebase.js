// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-j13mHVMw2KHR5asgVXaY-bhjkDqImqc",
  authDomain: "ticket-copilot.firebaseapp.com",
  projectId: "ticket-copilot",
  storageBucket: "ticket-copilot.firebasestorage.app",
  messagingSenderId: "550595180089",
  appId: "1:550595180089:web:21a312dac30aa972cebfe8",
  measurementId: "G-0F1YVFYTVY",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let analytics = null;

isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch(() => {
    analytics = null;
  });

export { app, auth, db, storage, analytics };