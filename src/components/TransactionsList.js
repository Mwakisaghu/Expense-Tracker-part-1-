import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-Khs400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
