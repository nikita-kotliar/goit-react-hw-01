import "../App.css";
import "./TransactionHistory.css";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import clsx from "clsx";

export const TransactionHistory = (props) => {
  const {items} = props;

  return (
    <table className="transaction-history">
      <thead className="transaction-main-head">
        <tr className="transaction-head">
          <th className="transaction-head-item">Type</th>
          <th className="transaction-head-item">Amount</th>
          <th className="transaction-head-item">Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-main-body">
        {items.map((item, index) => (
          <tr
            className={clsx("transaction-body", { color: index % 2 === 1 })}
            key={item.id}
          >
            <TransactionHistoryItem transactions={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
