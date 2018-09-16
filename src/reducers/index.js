import { combineReducers } from 'redux';
import aboutReducer from './aboutReducer';
import coordinatorReducer from "./coordinatorReducer";
import whenReducer from './whenReducer';
import formReducer from './formReducer';

const reducers = combineReducers({
  aboutReducer,
  coordinatorReducer,
  whenReducer,
  formReducer
})

export default reducers;