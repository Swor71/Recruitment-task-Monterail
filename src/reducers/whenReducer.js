import { 
  DURATION_CHANGE,
  TIME_CHANGE,
  DATE_CHANGE,
  TIME_OF_DAY_CHANGE
 } from '../actions/whenActions';

const initialState = {
  duration: null,
  day: null,
  time: null,
  timeOfDay:null
};

export default function whenReducer(state = initialState, action) {
  switch (action.type) {
    case DURATION_CHANGE:
      return {
        ...state, 
        duration: action.payload
      }
    case DATE_CHANGE:
      return {
        ...state, 
        day: action.payload
      }
    case TIME_CHANGE:
      return {
        ...state, 
        time: action.payload
      }
    case TIME_OF_DAY_CHANGE:
      return {
        ...state, 
        timeOfDay: action.payload
      }
    
    default:
    return state;
  }
}