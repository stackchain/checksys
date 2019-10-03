import React, { Component } from "react";
import { Flex, Box, Heading, Text } from "rebass";
import Helmet from "react-helmet";

class ScreenFAQ extends Component {
  render() {
    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | FAQ</title>
          <link rel="canonical" href="%PUBLIC_URL%/faq" />
        </Helmet>
        <Flex py={10}>
          <Heading>Our FAQ</Heading>
        </Flex>
        <Box>
          <Text>How it works?</Text>
        </Box>
      </Flex>
    );
  }
}

export default ScreenFAQ;