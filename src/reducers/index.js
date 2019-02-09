import signUpReducer from './signUpReducer';
import loginReducer from './loginReducer';
import productReducer from './productReducer';
import {combineReducers} from 'redux'
export default combineReducers({
    signUp : signUpReducer,
    login : loginReducer,
    product : productReducer
})