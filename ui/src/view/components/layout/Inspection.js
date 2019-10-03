import React, { Component } from "react";
import { Flex, Heading, Text } from "rebass";
import Helmet from "react-helmet";

import InspectionItem from "../inspection/Item";

class ScreenInspection extends Component {
  render() {
    const {
      inspections,
      checklists
    } = this.props;

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Inspections</title>
          <link rel="canonical" href="%PUBLIC_URL%/inspection" />
        </Helmet>
        <Flex py={10}>
          <Heading>Inspections</Heading>
        </Flex>
        <Flex width={1} flexDirection="column">
          <Flex py={2} alignItems="center">
            <Flex px={1} width={2/9} justifyContent="flex-end" alignItems="center">
              <Text fontWeight="700">Deadline</Text>
            </Flex>
            <Flex px={1} width={1/9} justifyContent="flex-end" alignItems="center">
              <Text fontWeight="700">Actions</Text>
            </Flex>
            <Flex px={1} width={2/9} alignItems="center">
              <Text fontWeight="700">Id</Text>
            </Flex>
            <Flex px={1} width={4/9} alignItems="center">
              <Text fontWeight="700">Checklist</Text>
            </Flex>
          </Flex>
          { inspections.map((inspection, key) => {
            return <InspectionItem key={key} inspection={inspection} checklist={checklists[inspection.checklist - 1]}/>
          })}
        </Flex>
      </Flex>
    );
  }
}

export default ScreenInspection;