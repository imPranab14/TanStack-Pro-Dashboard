self.addEventListener("push", (event) => {
  console.log("Push event received");

  event.waitUntil(
    self.registration.showNotification("Manual Push Test", {
      body: "If you see this, SW works.",
      //icon: "/logo192.png",
      requireInteraction: true,
      //vibrate: [300, 100, 300],
      //silent: false,
    }),
  );
});
