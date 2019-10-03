import React, { Component } from "react";
import { Flex, Button, Heading, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";

import LinkAction from "../../assets/LinkAction";

class ScreenNewInspection extends Component {
  constructor(props) {
    super(props);

    this.accountableInput = React.createRef();
  }

  componentDidMount() {
    this.accountableInput.current.focus();
  }

  render() {
    const {
      checklist,
      onSubmit
    } = this.props;

    const {
      name
    } = checklist;

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | New Inspection</title>
        </Helmet>
        <Flex mt={3} flexDirection="column" alignItems="center">
          <Heading>New Inspection</Heading>
          <Text pt={3} fontWeight="500">{name}</Text>
        </Flex>
        <Flex width={1} flexDirection="column">
          <hr />
          <form onSubmit={onSubmit}>
            <Text>Accountable</Text>
            <input type="text" name="accountable" ref={this.accountableInput}></input>
            <LinkAction px={1}><FontAwesomeIcon size="sm" icon={["fas", "search"]} /></LinkAction>
            <Text fontSize={1}>The wallet address starting with 0x</Text>
            <Text>Id</Text>
            <input type="text" name="id"></input>
            <Text fontSize={1}>The item unique identification</Text>
            <Text pt={1}>Deadline</Text>
            <input type="date" name="deadline"></input>
            <Text fontSize={1}>Select the date for the deadline</Text>
            <Flex pt={3} justifyContent="center">
              <Button type="submit" bg="secondary">Assign</Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenNewInspection;