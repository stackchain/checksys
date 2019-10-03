import React, { Component } from "react";
import { Flex, Heading, Text, Button } from "rebass";
import Helmet from "react-helmet";

import ScreenExecuteItem from "../inspection/ExecuteItem";

class ScreenExecuteInspection extends Component {
  render() {
    const {
      inspection,
      onSubmit
    } = this.props;

    const {
      _checklist
    } = inspection;

    const {
      _tasks
    } = _checklist;

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Execute Inspection</title>
          <link rel="canonical" href="%PUBLIC_URL%/contact" />
        </Helmet>
        <Flex py={10}>
          <Heading>Execute Inspection</Heading>
        </Flex>
        <Flex py={2} width={1} alignItems="center" justifyContent="center" flexDirection="column">
          <Text mb={1} fontSize={3} fontWeight="600">{inspection.id}</Text>
          <Text mb={1} fontWeight="500">{_checklist.name}</Text>
          <Text fontSize={1}>{inspection.deadline}</Text>
        </Flex>
        <Flex width={1} flexDirection="column">
          <form onSubmit={onSubmit} id="execute">
            <Flex py={2} alignItems="center">
              <Flex px={1} width={4/9} justifyContent="flex-end">
                <Text fontWeight="700">Task</Text>
              </Flex>
              <Flex px={1} width={1/9} justifyContent="center">
                <Text fontWeight="700">Status</Text>
              </Flex>
              <Flex px={1} width={3/9}>
                <Text fontWeight="700">Info</Text>
              </Flex>
            </Flex>
            { _tasks.map((task, key) => {
              return (
                <ScreenExecuteItem {...task} key={key} />
              );
            })}
            <Flex pt={3} justifyContent="center">
              <Button mx={2} type="submit" bg="secondary" name="confirm">Confirm</Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenExecuteInspection;