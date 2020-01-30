import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA6mgDZrD1r1cZEjAa2XlcK4FEH8zmvdgo",
  authDomain: "chat-wejdan.firebaseapp.com",
  databaseURL: "https://chat-wejdan.firebaseio.com",
  projectId: "chat-wejdan",
  storageBucket: "chat-wejdan.appspot.com",
  messagingSenderId: "845920508118",
  appId: "1:845920508118:web:946c3392cfc6ec1e1d1177",
  measurementId: "G-PQHDYMCTL0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
