import React from "react";

import DeckListStack from "./app/stacks/DeckListStack";
import { Row } from "./app/styled/components";
import Header from "./app/components/Header";

export default class App extends React.Component {
  render() {
    return (
      <Row>
        <Header />
        <DeckListStack />
      </Row>
    );
  }
}
