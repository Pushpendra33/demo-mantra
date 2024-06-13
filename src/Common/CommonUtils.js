import { Store } from "react-notifications-component";
import { notificationType, notificationPosition } from "./CommonConstants";

export const showNotification = (type, message, ...restParamsArray) => {
  const rest = restParamsArray[0];
  Store.addNotification({
    title: rest?.title,
    message: message,
    type: type === notificationType.ERROR ? notificationType.DANGER : type,
    insert: "top",
    container: rest.notificationPosition || notificationPosition.TOP_RIGHT,
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      showIcon: rest.showCloseIcon || true,
      duration: rest.duration || 4000,
    },
  });
};

export function manageUndefined(value) {
  if (value === "undefined" || value === undefined || value === null) {
    return "";
  }
  return value;
}
