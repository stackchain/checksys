import React, { Component } from "react";
import { Flex, Text, Box } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import Theme from "../../assets/Theme";
import LinkAction from "../../assets/LinkAction";

import * as C from "../../../logic/utils/constants";

class ScreenCheckItem extends Component {
  render() {
    const {
      task,
      check
    } = this.props;

    const {
      description
    } = task;

    const {
      ok,
      image,
      info
    } = check;

    return (
      <Flex py={2} alignItems="center">
        <Flex px={1} width={4/9} justifyContent="flex-end" alignItems="center">
          <Text>{description}</Text>
        </Flex>
        <Flex px={1} width={1/9} justifyContent="flex-start" alignItems="center">
          <Box color={Theme.colors[classnames({ "success": ok, "error": !ok })]} px={1}><FontAwesomeIcon size="lg" icon={classnames({"smile" : ok, "frown": !ok})} /></Box>
          { image !== "" && <LinkAction px={1}><a target="_blank" rel="noreferrer noopener" href={`${C.IPFS_VIEW}${image}`}><FontAwesomeIcon size="lg" icon={["far", "image"]} /></a></LinkAction> }
        </Flex>
        <Flex px={1} width={3/9} alignItems="center">
          <Text>{info}</Text>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenCheckItem;