import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC1CtmB8ECU0h7ns7X2DNbtzFwYorDsuf0",
    authDomain: "digitalbook-2af0b.firebaseapp.com",
    projectId: "digitalbook-2af0b",
    storageBucket: "digitalbook-2af0b.appspot.com",
    messagingSenderId: "424289415752",
    appId: "1:424289415752:web:b431320eee83e4b70d1e7d"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const db = getFirestore(app)

export{auth,db};
