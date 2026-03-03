self.addEventListener("push", (event) => {
  event.waitUntil(
    self.registration.showNotification("Push Working 🎉", {
      body: "Service Worker is correct",
      icon: "/logo192.png",
    })
  );
});