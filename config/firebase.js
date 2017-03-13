import firebase from 'firebase';

export const firebaseUrl = 'https://potlucky-16935.firebaseio.com';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBjur9LPm-W7zZE_p4zOlKqYwsO3eviaP8",
  authDomain: "potlucky-16935.firebaseapp.com",
  databaseURL: "https://potlucky-16935.firebaseio.com",
  storageBucket: "potlucky-16935.appspot.com",
  messagingSenderId: "821037068529"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
