import React from 'react';
import './Payment.css';

const Payment = () => (
  <div className="form--flex">
    <span className="form__label">payment</span>
    <div className="font--small">
      <label>
        <input type="radio" name="payment" value="free_event" />
        Free event
      </label>
      <label>
        <input type="radio" name="payment" value="paid_event" />
        Paid event
      </label>
    </div>
  </div>
);

export default Payment;
