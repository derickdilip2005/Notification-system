// src/components/Notification.js
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messagesRef } from "../firebase";

toast.configure();

const Notification = () => {
  useEffect(() => {
    // Listen for changes in the database
    messagesRef.on("child_added", (snapshot) => {
      const message = snapshot.val();
      displayNotification(message.text);
    });

    return () => {
      messagesRef.off();
    };
  }, []);

  const displayNotification = (message) => {
    toast.info(message, { position: toast.POSITION.TOP_RIGHT });
  };

  return <></>;
};

export default Notification;
