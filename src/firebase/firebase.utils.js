import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  getDocs,
  query,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_BbueZrKHrNtjuL5LPy3SDLg2hrDUSNI',
  authDomain: 'crwn-db-e2a58.firebaseapp.com',
  projectId: 'crwn-db-e2a58',
  storageBucket: 'crwn-db-e2a58.appspot.com',
  messagingSenderId: '399506609849',
  appId: '1:399506609849:web:07d5c5a933a06097156d68',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    const docs = query(
      collection(firestore, 'users'),
      where('uid', '==', user.uid)
    );
    const snapShot = await getDocs(docs);

    if (snapShot.empty) {
      await createNewUserProfile(user);
    }
  } catch (error) {
    console.error(error);
  }
};

async function createNewUserProfile(user) {
  const { uid, displayName, email } = user;
  try {
    await addDoc(collection(firestore, 'users'), {
      uid,
      displayName,
      email,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error creating user: ', error.message);
  }
}

const registerWithEmailAndPassword = async (displayName, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(firestore, 'users'), {
      uid: user.uid,
      displayName,
      email,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error(error);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (error) {
    console.error(error);
  }
};

const logOut = () => {
  signOut(auth);
};

export {
  auth,
  firestore,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut,
};
