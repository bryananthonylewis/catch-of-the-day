import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCj9UqnXl7aP1sCD8fN8ziKMZOpq9QzYwg",
  authDomain: "catch-of-the-day-bryan-lewis.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-bryan-lewis.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
