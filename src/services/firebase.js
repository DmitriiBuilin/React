import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    signOut  } from "firebase/auth";
// import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDpyDwMoVVFcfBdjqUkoJY2hQtYxrwO84A",
  authDomain: "gb-react-2022.firebaseapp.com",
  projectId: "gb-react-2022",
  storageBucket: "gb-react-2022.appspot.com",
  messagingSenderId: "254277553021",
  appId: "1:254277553021:web:ccf47e68f29958abe19a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firbaseAuth = getAuth(app);

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(firbaseAuth, email, password)
  }
  
  export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(firbaseAuth, email, password)
  }
  
  export const logOut = async () => await signOut(firbaseAuth)
  
//   const db = getDatabase(app)
  
//   export const userRef = ref(db, 'user')
//   export const postsRef = ref(db, 'posts')
//   export const getPostById = (postID) => ref(db, `posts/${postID}`)