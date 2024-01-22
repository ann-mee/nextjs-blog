import ReactDOM from "react-dom";
import classes from "./notification.module.css";

export default function Notification({ status, title, message }) {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }
  if (status === "error") {
    statusClasses = classes.error;
  }

  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${statusClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}
