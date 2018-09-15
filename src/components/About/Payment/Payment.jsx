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
      <label className="form__divider--margin-sides">
        <input type="radio" name="payment" value="paid_event" />
        Paid event
      </label>
      <input className="form__field--short field--border-light" type="number" placeholder="Fee" />
      <span>$</span>
    </div>
  </div>
);

export default Payment;
