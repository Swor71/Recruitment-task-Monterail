export const SUBMIT_EVENT = 'SUBMIT_EVENT';
export const NEW_EVENT = 'NEW_EVENT';

export function submitEvent(event) {
  return {
    type: SUBMIT_EVENT,
    payload: event,
  }
}

export function newEvent() {
  return {
    type: NEW_EVENT,
  }
}