import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5_eit0bM26bLA3CQRcuBGd07OBbEHUZI",
  authDomain: "catch-of-the-day-martin-asnong.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-martin-asnong.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
