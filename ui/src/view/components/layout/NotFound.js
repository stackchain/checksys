import React, { Component } from "react";
import { Flex, Text, Heading } from "rebass";
import { Helmet } from "react-helmet";

class ScreenNotFound extends Component {
  render() {
    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Not Found</title>
          <link rel="canonical" href="__must_come_from_process_env_variable__" />
        </Helmet>
        <Flex py={10}>
          <Heading>Not Found</Heading>
        </Flex>
        <Flex>
          <Text>The resource that you are trying to find is no longer available.</Text>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenNotFound;