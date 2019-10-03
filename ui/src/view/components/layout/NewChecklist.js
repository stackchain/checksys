import React, { Component } from "react";
import { Flex, Button, Heading, Text } from "rebass";
import Helmet from "react-helmet";

class ScreenNewChecklist extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
  }

  componentDidMount() {
    this.nameInput.current.focus();
  }

  render() {
    const {
      onSubmit
    } = this.props;

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | New Checklist</title>
        </Helmet>
        <Flex mt={3} flexDirection="column">
          <Heading>New Checklist</Heading>
        </Flex>
        <Flex mt={1} flexDirection="column">
          <hr />
          <form onSubmit={onSubmit}>
            <Text>Name</Text>
            <input type="text" name="name" ref={this.nameInput}></input>
            <Text fontSize={1}>Name of the checklist</Text>
            <Flex pt={3} justifyContent="center">
              <Button mx={2} type="submit" bg="secondary">Create Checklist</Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenNewChecklist;