import React from "react";
import createStore from '../redux/createStore';
import store from '../store/index';

/**
 * createStore(reducer, preloadedState, enhancer)
 */

// let store = createStore();
export default class LoginPage extends React.Component {
  componentWillMount() {
    store.dispatch({ type: "changeUserInfoType", data: { name: 'zly', password: '13' } })
    setTimeout(() => {
      store.dispatch({ type: "logOutType", data: { token: 'sss' } })
    }, 3000);

  }

  componentDidMount() {
    setTimeout(() => {
      console.log(store.getState());
    }, 5000);

  }

  open(name, age) {
    // console.log(args);
    // const list = open(...args)
    // store.dispatch({ type: 'add', data: { name: name, age: age } })
    // setTimeout(() => {
    //   console.log(store.getState());

    // }, 1000);

    console.log(store.getState());

  }
  render() {


    return <div onClick={this.open.bind(this, 'lt111', '18')}>123123123</div>;
  }
}
