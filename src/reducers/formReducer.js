import { SUBMIT_EVENT, NEW_EVENT } from '../actions/formActions';

const initialState = {
  events: [],
  submited: false
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        submited: !state.submited
      }
    case NEW_EVENT:
      return {
        ...state,
        submited: !state.submited
      }
    default:
      return state;
  }
}