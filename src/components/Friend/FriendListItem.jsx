import "../App.css";
import "./FriendList.css";

export const FriendListItem = (props) => {
  const item = props.friend;
  console.log(item);
  return (
    <>
      <img className="friend-logo" src={item.avatar} alt="photo" />
      <p className="friend-name">{item.name}</p>
      {item.isOnline ? (
        <p className="friend-orline online">Online</p>
      ) : (
        <p className="friend-orline offline">Offline</p>
      )}
    </>
  );
};
