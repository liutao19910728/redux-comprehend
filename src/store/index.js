// import { createStore, applyMiddleware } from "redux";
// import rootReducer from '../reducers';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createLogger } from 'redux-logger'
// // const loggerMiddleware = createLogger({ collapsed: true });
// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )
//     ;

import createStore from '../redux/createStore';
import rootReducer from '../reducers/index.jsx';

console.log('rootReducer',rootReducer);

let store = createStore(rootReducer)




export default store
