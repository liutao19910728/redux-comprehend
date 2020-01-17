import combineReducers from '../redux/combineReducers';

import { loginReucer, logOutReducer } from '../login/loginMordel';



let allReducer = {
    loginReucer,
    logOutReducer,
}





const rootReducer = combineReducers(allReducer)











export default rootReducer;