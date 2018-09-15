
export const TITLE_CHANGE = 'TITLE_CHANGE';
export const DESCRIPTION_CHANGE = 'DESCRIPTION_CHANGE';
export const CATEGORY_CHANGE = 'CATEGORY_CHANGE';
export const PAYMENT_CHANGE = 'PAYMENT_CHANGE';
export const FEE_CHANGE = 'FEE_CHANGE';
export const REWARD_POINTS = 'REWARD_POINTS';
export const REWARD_CHANGE = 'REWARD_CHANGE';

export function titleChange(title) {
  return {
    type: TITLE_CHANGE,
    payload: title
  }
}

export function descriptionChange(description) {
  return {
    type: DESCRIPTION_CHANGE,
    payload: description
  }
}

export function categoryChange(category) {
  return {
    type: CATEGORY_CHANGE,
    payload: category
  }
}

export function paymentChange(payment) {
  return {
    type: PAYMENT_CHANGE,
    payload: payment
  }
}

export function feeChange(fee) {
  return {
    type: FEE_CHANGE,
    payload: fee
  }
}

export function rewardChange(reward) {
  return {
    type: REWARD_CHANGE,
    payload: reward
  }
}