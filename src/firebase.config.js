import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAq4blKRrltgJiMBXaWPiE5ANuiYpEwgNo",
  authDomain: "fooddeliverywebapp-297ca.firebaseapp.com",
  databaseURL: "https://fooddeliverywebapp-297ca-default-rtdb.firebaseio.com",
  projectId: "fooddeliverywebapp-297ca",
  storageBucket: "fooddeliverywebapp-297ca.appspot.com",
  messagingSenderId: "977356623709",
  appId: "1:977356623709:web:fedd76b6c39e3e2dee22b4"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
