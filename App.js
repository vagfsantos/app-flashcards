import React from "react";

import DeckListStack from "./app/stacks/DeckListStack";
import { Row } from "./app/styled/components";

export default class App extends React.Component {
  render() {
    return (
      <Row>
        <DeckListStack />
      </Row>
    );
  }
}
