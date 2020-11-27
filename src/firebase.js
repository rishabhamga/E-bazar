// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCb3Y04bqN9_GGeu7cR4Kad0aZ7l7S4c8Q",
    authDomain: "e-bazaar-fae70.firebaseapp.com",
    databaseURL: "https://e-bazaar-fae70.firebaseio.com",
    projectId: "e-bazaar-fae70",
    storageBucket: "e-bazaar-fae70.appspot.com",
    messagingSenderId: "783861805339",
    appId: "1:783861805339:web:663ae54f110d44d4d863be",
    measurementId: "G-N3TVMWSMHK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };