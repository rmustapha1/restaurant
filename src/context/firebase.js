import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN44qXk5jePaZGuXoqwYXFkyFdP7MingM",
  authDomain: "restaurant-343d1.firebaseapp.com",
  projectId: "restaurant-343d1",
  storageBucket: "restaurant-343d1.appspot.com",
  messagingSenderId: "93891526534",
  appId: "1:93891526534:web:531913fed3476fd580b607",
  measurementId: "G-RZE0MP49JM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
