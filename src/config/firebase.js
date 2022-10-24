import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
// confignya didapat dari halaman firebase kalian
// bisa dicek di https://firebase.google.com/
const firebaseConfig = {
  apiKey: "AIzaSyDd2SwNEZu3P9Qn8J3VCtUuZMKVAvKHtmE",
  authDomain: "mood-meter-41038.firebaseapp.com",
  projectId: "mood-meter-41038",
  storageBucket: "mood-meter-41038.appspot.com",
  messagingSenderId: "127488972086",
  appId: "1:127488972086:web:9b20bea73b3d2ea65f8f97",
};

const app = initializeApp(firebaseConfig);
// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };
