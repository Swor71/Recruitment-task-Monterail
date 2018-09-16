import { 
  EMAIL_CHANGE,
  COORDINATOR_ID_CHANGE
 } from '../actions/coordinatorActions';

const initialState = {
  loggedInID: 3,
  coordinator: {
    email: null,
    id: null,
  }
};

export default function coordinatorReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {
        ...state, 
        coordinator: {
          email: action.payload,
          id: state.coordinator.id
        } 
      }
    case COORDINATOR_ID_CHANGE:
      return {
        ...state, 
        coordinator: {
          email: state.coordinator.email,
          id: action.payload
        } 
      }
    default:
    return state;
  }
}