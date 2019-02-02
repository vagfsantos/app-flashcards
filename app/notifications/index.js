import { Permissions, Notifications } from "expo";
import storage from "../storage";

export default {
  async scheduleReminder() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    const tomorrow = new Date().setDate(new Date().getDate() + 1);
    const id = await storage.getScheduledNotificationId();

    if (status === "granted" && !id) {
      const scheduleId = await Notifications.scheduleLocalNotificationAsync({
        title: "Do not forget to study",
        body: "The more you study the better you get",
        repeat: "day",
        time: tomorrow
      });

      storage.saveScheduledNotificationId(scheduleId);
    }
  },

  async cancelTodaysNotification() {
    const id = await storage.getScheduledNotificationId();
    await Notifications.cancelScheduledNotificationAsync(id);
    await storage.removeScheduledNotificationId();

    return this.scheduleReminder();
  }
};
