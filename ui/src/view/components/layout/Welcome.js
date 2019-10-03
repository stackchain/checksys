import React, { Component } from "react";
import { Flex, Text, Heading } from "rebass";
import { Helmet } from "react-helmet";

class ScreenWelcome extends Component {
  render() {
    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Welcome</title>
          <link rel="canonical" href="__must_come_from_process_env_variable__" />
        </Helmet>
        <Flex py={10}>
          <Heading>Welcome to Checksys</Heading>
        </Flex>
        <Flex>
          <Text>To use this DAPP you need to sign in with your Metamask account</Text>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenWelcome;