import { useDispatch } from "react-redux";
import {
  addNotification,
  clearNotification as clearnotify,
} from "../Store/notificationSlice";

import { notificationInitialState } from "../Store/notificationSlice";

export const useNotification = () => {
  const dispatch = useDispatch();

  const displayNotification = ({ type, message }) => {
    dispatch(addNotification({ type, message }));
    setTimeout(() => {
      dispatch(clearNotification());
    }, notificationInitialState?.timeout);
  };

  const clearNotification = () => {
    dispatch(clearnotify());
  };

  return { displayNotification, clearNotification };
};
