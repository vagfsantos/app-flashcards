import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./app/reducers";
import middlewares from "./app/middlewares";

import Stacks from "./app/stacks";
import { Main } from "./app/styled/components";

const store = createStore(reducers, middlewares);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main>
          <Stacks />
        </Main>
      </Provider>
    );
  }
}
