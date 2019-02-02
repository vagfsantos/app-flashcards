import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./app/reducers";
import middlewares from "./app/middlewares";

import Stacks from "./app/stacks";
import { Main } from "./app/styled/components";

import notificationService from "./app/notifications";

const store = createStore(reducers, middlewares);

export default class App extends Component {
  componentDidMount() {
    notificationService.scheduleReminder();
  }

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
