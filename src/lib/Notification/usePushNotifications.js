import { supabase } from "../supabase/superbase";

//IMPORTANT VAPID public key for push notifications
const publicKey = "BCyDQoDD8xS-BCKkrfNJqdm6G0rcPymfevP-htUsNJzzC907i529Iw0hUgZHZiMtxBWC9_HBaLhMOs1Wjrps92I";

export function usePushNotifications() {
  const subscribeUser = async () => {
    // Request permission to send notifications
    const permission = await Notification.requestPermission();
    //NOTE: You should handle the case where the user denies permission
    if (permission !== "granted") return;


    // Register the service worker and subscribe to push notifications
    const registration = await navigator.serviceWorker.ready;

    // Subscribe to push notifications with the VAPID public key
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    });

    console.log("subscription_save_payload",subscription);

    //IMPORTANT: Send the subscription object to your server to save it and use it for sending notifications
    await supabase.from("push_subscriptions").insert([{ subscription }]);

    console.log("Subscribed successfully");
  };

  return { subscribeUser };
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}
