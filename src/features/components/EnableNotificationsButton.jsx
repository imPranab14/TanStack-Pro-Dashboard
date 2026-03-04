import { usePushNotifications } from "../../lib/Notification/usePushNotifications.js";

export default function EnableNotificationsButton() {
  // This component is responsible for subscribing the user to push notifications
  const { subscribeUser } = usePushNotifications();

  return (
    <button onClick={subscribeUser}>
      Enable Notifications
    </button>
  );
}