import "../App.css";
import "./FriendList.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = (props) => {
  const friends = props.friends;

  return (
    <div className="friendListCard">
      <ul className="friends-all-card">
        {friends.map((friend) => (
          <li className="friend" key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
