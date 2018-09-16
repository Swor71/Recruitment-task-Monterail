export const EMAIL_CHANGE = 'EMAIL_CHANGE';
export const COORDINATOR_ID_CHANGE = 'COORDINATOR_ID_CHANGE';

export function emailChange(email) {
  return {
    type: EMAIL_CHANGE,
    payload: email
  }
}

export function coordinatorIdChange(id) {
  return {
    type: COORDINATOR_ID_CHANGE,
    payload: id
  }
}