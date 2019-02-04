import React, { Component } from "react";
import { Provider } from "react-redux";

import { STORE } from "./app/store";
import Stacks from "./app/stacks";
import { Main } from "./app/styled/components";

import notificationService from "./app/notifications";

export default class App extends Component {
  componentDidMount() {
    notificationService.scheduleReminder();
  }

  render() {
    return (
      <Provider store={STORE}>
        <Main>
          <Stacks />
        </Main>
      </Provider>
    );
  }
}
