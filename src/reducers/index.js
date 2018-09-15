import { combineReducers } from 'redux';
import aboutReducer from './aboutReducer';
import coordinatorReducer from "./coordinatorReducer";
import whenReducer from './whenReducer'

const reducers = combineReducers({
  aboutReducer,
  coordinatorReducer,
  whenReducer
})

export default reducers;