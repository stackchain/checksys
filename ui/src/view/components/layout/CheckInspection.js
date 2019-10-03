import React, { Component } from "react";
import { Flex, Heading, Text, Button } from "rebass";
import Helmet from "react-helmet";

import ScreenCheckItem from "../inspection/CheckItem";

class ScreenCheckInspection extends Component {
  render() {
    const {
      inspection,
      history
    } = this.props;

    const {
      _checklist,
      _checks
    } = inspection;

    const {
      _tasks
    } = _checklist;

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Check Inspection</title>
          <link rel="canonical" href="%PUBLIC_URL%/contact" />
        </Helmet>
        <Flex py={10}>
          <Heading>Check Inspection</Heading>
        </Flex>
        <Flex py={2} width={1} alignItems="center" justifyContent="center" flexDirection="column">
          <Text mb={1} fontSize={3} fontWeight="600">{inspection.id}</Text>
          <Text mb={1} fontWeight="500">{_checklist.name}</Text>
          <Text fontSize={1}>Executed at: {inspection.executedAt}</Text>
        </Flex>
        <Flex width={1} flexDirection="column">
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
          { _checks.map((check, key) => {
            return (
              <ScreenCheckItem check={check} task={_tasks[check.task - 1]} key={key} />
            );
          })}
        </Flex>
        <Flex pt={3} justifyContent="center">
          <Button mx={2} type="button" bg="grayOff" name="return" onClick={() => history.goBack()}>Back</Button>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenCheckInspection;