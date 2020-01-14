import React from "react";
import { createStore, applyMiddleware } from "redux";

/**
 * createStore(reducer, preloadedState, enhancer)
 */

let store = createStore();
export default class LoginPage extends React.Component {
  componentDidMount() {
    console.dir(createStore);
  }
  render() {
    return <div>12312</div>;
  }
}
