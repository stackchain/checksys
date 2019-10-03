import React, { Component, Fragment } from "react";
import { Flex, Text, Box, Image } from "rebass";
import LoadingBar from "react-redux-loading-bar";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";

import LinkMenu from "../../assets/LinkMenu";
import Theme from "../../assets/Theme";

import * as C from "../../../logic/utils/constants";

// TODO: move to route it should be a presentational component
const mapStateToProps = state => {
  return {
    metamask: state.metamaskStatus
  }
}

class ScreenHeader extends Component {
  render() {
    const {
      metamask
    } = this.props;

    const {
      network = {
        tag: "** UNSUPPORTED **"
      }
    } = metamask;

    const connected = metamask.status === C.STATUS_OK;

    const user = metamask.name ? `Hi, ${metamask.name}` : `${metamask.account}`

    return (
      <Fragment>
        <Flex>
          <LoadingBar />
        </Flex>
        <Flex p={2} bg="white" alignItems="center">
            <Flex px={1} color="#342">
              <RouterLink to="/">
                <Flex alignItems="center" justifyContent="center">
                  <Text color={Theme.colors.grayOn} fontSize={5}>Checksys</Text>
                  <Image px={1} src="/media/icons/checksys-icon-16x16.png"/>
                </Flex>
              </RouterLink>
            </Flex> 
            <Box mx="auto"/>
            <Flex flexDirection="column" alignItems="flex-end">
              <small><strong>{connected ? `${network.tag}` : "" }</strong></small>
              <small>{connected ? `${user}` : "" }</small>
            </Flex>
        </Flex>
        <Flex p={2} bg="white" css={{ "box-shadow": "0 0.25rem 0.125rem 0 rgba(0,0,0,0.05)" }} alignItems="center">
          { connected ? [
            <RouterLink key={"checklist"} to="/checklist"><LinkMenu px={2}>Checklists</LinkMenu></RouterLink>,
            <RouterLink key={"inspection"} to="/inspection"><LinkMenu px={2}>Inspections</LinkMenu></RouterLink>
          ] : null }
          <Box mx="auto"/>
          <RouterLink to="/faq"><LinkMenu px={2}>FAQ</LinkMenu></RouterLink>
          <RouterLink to="/about"><LinkMenu px={2}>About</LinkMenu></RouterLink>
          <RouterLink to="/contact"><LinkMenu px={2}>Contact</LinkMenu></RouterLink>
        </Flex>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(ScreenHeader);