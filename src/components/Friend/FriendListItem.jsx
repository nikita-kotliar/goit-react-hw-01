import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendListItem = (props) => {
  const item = props.friend;
  return (
    <>
      <img className={css.friend_logo} src={item.avatar} alt="photo" />
      <p className={css.friend_name}>{item.name}</p>
      <p className={clsx(css.friend_orline, { [css.online]: item.isOnline, [css.offline]: !item.isOnline })}>
        {item.isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};