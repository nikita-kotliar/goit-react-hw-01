
import css from "./TransactionHistory.module.css";

export const TransactionHistoryItem = (props) => {
  const item = props.transactions;
  return (
    <>
      <td className={css.transaction_body_item}>{item.type}</td>
      <td className={css.transaction_body_item}>{item.amount}</td>
      <td className={css.transaction_body_item}>{item.currency}</td>
    </>
  );
};
