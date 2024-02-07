import "../App.css";
import "./TransactionHistory.css";

export const TransactionHistoryItem = (props) => {
  const item = props.transactions;
  return (
    <>
      <td className="transaction-body-item">{item.type}</td>
      <td className="transaction-body-item">{item.amount}</td>
      <td className="transaction-body-item">{item.currency}</td>
    </>
  );
};
