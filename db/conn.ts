import firebase from "firebase/app";

import config from "../config/default";

const db = firebase.initializeApp(config.firebaseConfig);

export default db;
