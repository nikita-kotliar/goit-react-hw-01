
import css from "./FriendList.module.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = (props) => {
  const friends = props.friends;

  return (
    <div className={css.friendListCard}>
      <ul className={css.friends_all_card}>
        {friends.map((friend) => (
          <li className={css.friend} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
