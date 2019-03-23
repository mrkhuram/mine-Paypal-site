import { combineReducers } from 'redux';
import userReducer from './userReducer/index';
 

const rootReducer = combineReducers({
        user: userReducer,
        
});

export default rootReducer;
  