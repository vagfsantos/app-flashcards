import React from "react";

import DeckListStack from "./app/stacks/DeckListStack";
import { Main, Body } from "./app/styled/components";
import Header from "./app/components/Header";

export default class App extends React.Component {
  render() {
    return (
      <Main>
        <Header />
        <DeckListStack />
      </Main>
    );
  }
}
