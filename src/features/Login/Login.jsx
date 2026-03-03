import React, { useEffect } from "react";

function Login() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      console.log("Permission:", permission);
    });
  }, []);
  return (
    <>
      <h1>Login.....</h1>
    </>
  );
}

export default Login;
