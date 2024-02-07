import css from "./TransactionHistory.module.css";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import clsx from "clsx";

export const TransactionHistory = (props) => {
  const { items } = props;

  return (
    <table className={css.transaction_history}>
      <thead className={css.transaction_main_head}>
        <tr className={css.transaction_head}>
          <th className={css.transaction_head_item}>Type</th>
          <th className={css.transaction_head_item}>Amount</th>
          <th className={css.transaction_head_item}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transaction_main_body}>
        {items.map((item, index) => (
          <tr
            className={clsx(css.transaction_body, { [css.color]: index % 2 === 1 })}
            key={item.id}
          >
            <TransactionHistoryItem transactions={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
