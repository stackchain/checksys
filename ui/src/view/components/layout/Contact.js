import React, { Component } from "react";
import { Flex, Box, Heading, Text } from "rebass";
import Helmet from "react-helmet";

class ScreenContact extends Component {
  render() {
    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Contact</title>
          <link rel="canonical" href="%PUBLIC_URL%/contact" />
        </Helmet>
        <Flex py={10}>
          <Heading>Our Contact</Heading>
        </Flex>
        <Box>
          <Text>Contact us!</Text>
        </Box>
      </Flex>
    );
  }
}

export default ScreenContact;