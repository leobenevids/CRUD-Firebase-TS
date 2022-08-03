import firebase from "firebase/app";
import "firebase/firestore";
import config from "../config/default";

const db = firebase.initializeApp(config.firebaseConfig);

const firestore = db.firestore();

export default firestore;
