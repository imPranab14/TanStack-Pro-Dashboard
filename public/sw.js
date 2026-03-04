self.addEventListener("push", (event) => {
  console.log("Push received");

  const data = event.data ? event.data.json() : {};

  const title = data.title || "Notification";
  const options = {
    body: data.body || "You have a new notification",
    // icon: "/logo192.png",
    // badge: "/logo192.png",
    vibrate: [200, 100, 200],
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});