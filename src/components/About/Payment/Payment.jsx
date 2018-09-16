import React from 'react';
import './Payment.css';

const Payment = props => (
  <div className="form--flex">
    <span className="form__label">payment</span>
    <div className="font--small" style={{ lineHeight: '30px' }}>
      <label>
        <input type="radio" name="payment" value="free" onChange={e => props.onPaymentChange(e)} />
        Free event
      </label>
      <label className="form__divider--margin-sides">
        <input type="radio" name="payment" value="paid" onChange={e => props.onPaymentChange(e)} />
        Paid event
      </label>
      {props.paidEvent === false ? null : (
        <span>
          <input
            className="form__field--short field--border-light"
            type="number"
            placeholder="Fee"
            onChange={e => props.onFeeChange(e)}
            required={true}
          />
          <span>$</span>
        </span>
      )}
    </div>
  </div>
);

export default Payment;
