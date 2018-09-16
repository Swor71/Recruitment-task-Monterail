export const DURATION_CHANGE = 'DURATION_CHANGE';
export const TIME_CHANGE = 'TIME_CHANGE';
export const DATE_CHANGE = 'DATE_CHANGE';
export const TIME_OF_DAY_CHANGE = 'TIME_OF_DAY_CHANGE';

export function durationChange(duration) {
  return {
    type: DURATION_CHANGE,
    payload: duration
  }
}
export function timeChange(time) {
  return {
    type: TIME_CHANGE,
    payload: time
  }
}
export function dateChange(date) {
  return {
    type: DATE_CHANGE,
    payload: date
  }
}
export function timeOfDayChange(timeOfDay) {
  return {
    type: TIME_OF_DAY_CHANGE,
    payload: timeOfDay
  }
}
