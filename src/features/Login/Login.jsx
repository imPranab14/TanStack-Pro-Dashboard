import React, { useEffect } from "react";
import EnableNotificationsButton from "../components/EnableNotificationsButton";

function Login() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      console.log("Permission:", permission);
    });
  }, []);
  return (
    <>
      <h1>Login.....</h1>
      <EnableNotificationsButton/>
    </>
  );
}

export default Login;
