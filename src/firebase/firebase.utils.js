import firebase from 'firebase/app';
import 'firebase/firestore' ;
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDcrrzYXRve0t6CRAg32do6FwAPDv801tI",
        authDomain: "easy-clothing-db.firebaseapp.com",
        projectId: "easy-clothing-db",
        storageBucket: "easy-clothing-db.appspot.com",
        messagingSenderId: "914393020279",
        appId: "1:914393020279:web:cb10ae4d2fc7f9ed81d372"
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;