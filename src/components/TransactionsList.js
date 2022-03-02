import React, { Fragment } from 'react';

export const TransactionsList = () => {
  return (
    <Fragment>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-Khs400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </Fragment>
  );
};
