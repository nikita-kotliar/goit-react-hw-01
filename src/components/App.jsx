import { Profile } from "./Profile/Profile";
import { FriendList } from "./Friend/FriendList";
import { TransactionHistory } from "./Transaction/TransactionHistory";
import {userData} from "../userData.json";
import {friends} from "../friends.json";
import { transactions } from "../transactions.json";
import { useState } from "react";

export const App = () => {
  const [page, setPage] = useState("Profile");

  const handleLinkClick = (pageName) => {
    setPage(pageName);
  };
  return (
    <>
      <div className="header">
        <button
          className="header-link"
          onClick={() => handleLinkClick("Profile")}
        >
          Profile
        </button>
        <button
          className="header-link"
          onClick={() => handleLinkClick("FriendList")}
        >
          FriendList
        </button>

        <button
          className="header-link"
          onClick={() => handleLinkClick("Transaction")}
        >
          Transaction
        </button>
      </div>
      {page === "Transaction" ? (
        <TransactionHistory items={transactions} />
      ) : page === "FriendList" ? (
        <FriendList friends={friends} />
      ) : (
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      )}
    </>
  );
};

