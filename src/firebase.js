// src/firebase.js
import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCiTb-WNtPwaBuc846CaIaQTw1iQ1hhbms",
  authDomain: "aid-for-everyone.firebaseapp.com",
  projectId: "aid-for-everyone",
  storageBucket: "aid-for-everyone.appspot.com",
  messagingSenderId: "64516471823",
  appId: "1:64516471823:web:c31a4effab7c735534777a",
  databaseURL: "https://aid-for-everyone-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

firebase.initializeApp(firebaseConfig);

// Firebase Cloud Messaging
const messaging = firebase.messaging();

// Request permission for notifications
export const requestNotificationPermission = async () => {
  try {
    await Notification.requestPermission();
    const token = await messaging.getToken();
    console.log("User token: ", token);
    return token;
  } catch (error) {
    console.error("Error getting token", error);
  }
};

// Firebase Realtime Database
const db = firebase.database();
export const messagesRef = db.ref("/messages");

export default firebase;
