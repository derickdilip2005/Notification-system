import React, { useEffect } from "react";
import { requestNotificationPermission } from "./firebase";
import Notification from "./components/Notification";

const App = () => {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div>
      <h1>Communication Aid Notification App</h1>
      <Notification />
    </div>
  );
};

export default App;
