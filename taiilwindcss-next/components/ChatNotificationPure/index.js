import styles from "./styles.module.css";

export default function ChatNotificationPure() {
  return (
    <div className={styles.chat_notification}>
      <div className={styles.chat_notification_logo_wrapper}>
        <img
          className={styles.chat_notification_logo}
          src="/images/chat.svg"
          alt="ChitChat Logo"
        />
      </div>
      <div className={styles.chat_notification_content}>
        <h4 className={styles.chat_notification_title}>ChitChat</h4>
        <p className={styles.chat_notification_message}>
          You have a new message!
        </p>
      </div>
    </div>
  );
}
