import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./app/reducers";
import middlewares from "./app/middlewares";

import DeckListStack from "./app/stacks/DeckListStack";
import { Main } from "./app/styled/components";
import Header from "./app/components/Header";

const store = createStore(reducers, middlewares);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main>
          <Header />
          <DeckListStack />
        </Main>
      </Provider>
    );
  }
}
