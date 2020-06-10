import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';
import basketReducer from './basketReducer';

export default combineReducers({
    auth: authReducer,
    menu: menuReducer,
    basket: basketReducer
});