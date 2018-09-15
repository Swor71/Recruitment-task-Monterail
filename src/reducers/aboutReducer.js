import { 
  TITLE_CHANGE,
  DESCRIPTION_CHANGE,
  CATEGORY_CHANGE,
  PAYMENT_CHANGE,
  FEE_CHANGE,
  REWARD_CHANGE
 } from '../actions/aboutActions';

const initialState = {
  title: '',
  description: '',
  category_id: null,
  paid_event: false,
  event_fee: null,
  reward: null,
};

export default function aboutReducer(state = initialState, action) {

  switch (action.type) {
    case TITLE_CHANGE:
      return {
        ...state, 
        title: action.payload
      }
    case DESCRIPTION_CHANGE:
      return {
        ...state, 
        description: action.payload
      }
    case CATEGORY_CHANGE:
      return {
        ...state, 
        category_id: action.payload
      }
    case PAYMENT_CHANGE:
      if (action.payload === 'free') {
        return {...state, paid_event: false}
      } else {
        return {...state, paid_event: true}
      }
    case FEE_CHANGE:
      return {
        ...state, 
        event_fee: action.payload
      }
    case REWARD_CHANGE:
      return {
        ...state, 
        reward: action.payload
      }
    default:
      return state;
  }
}