import React, { Component } from "react";
import { Flex, Box, Heading, Text } from "rebass";
import Helmet from "react-helmet";

class ScreenAbout extends Component {
  render() {
    return (
      <Flex px={2} alignItems='center' flexDirection='column'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | About</title>
          <link rel="canonical" href="%PUBLIC_URL%/about" />
        </Helmet>
        <Flex py={10}>
          <Heading>About us</Heading>
        </Flex>
        <Box>
          <Text>Owner: {process.env.REACT_APP_OWNER}</Text>
          <Text>Contract: {process.env.REACT_APP_CONTRACT}</Text>
        </Box>
      </Flex>
    );
  }
}

export default ScreenAbout;