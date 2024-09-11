importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  appId: "YOUR_APP_ID",
  apiKey: "AIzaSyCiTb-WNtPwaBuc846CaIaQTw1iQ1hhbms",
  authDomain: "aid-for-everyone.firebaseapp.com",
  projectId: "aid-for-everyone",
  storageBucket: "aid-for-everyone.appspot.com",
  messagingSenderId: "64516471823",
  appId: "1:64516471823:web:c31a4effab7c735534777a",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});