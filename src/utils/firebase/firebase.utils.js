import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider 
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDn3ajOPb7nrJi366LxcQDnyEArXS_rYYk",
    authDomain: "crwn-clothing-db-fa192.firebaseapp.com",
    projectId: "crwn-clothing-db-fa192",
    storageBucket: "crwn-clothing-db-fa192.appspot.com",
    messagingSenderId: "277217686238",
    appId: "1:277217686238:web:12fbf559fa27c1a911884f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  export const auth = getAuth();
  
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }


return userDocRef;
  //return userDocRef
};