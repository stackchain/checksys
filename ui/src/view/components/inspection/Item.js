import React from "react";
import { Flex, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { Link as RouterLink } from "react-router-dom";

import Theme from "../../assets/Theme";

import LinkAction from "../../assets/LinkAction";

const ScreenInspectionItem = (props) => {
  const {
    inspection,
    checklist
  } = props;

  const {
    deadline,
    id,
    number,
    status
  } = inspection;

  const {
    name
  } = checklist;

  return (
    <Flex py={2} alignItems="center">
      <Flex px={1} width={2/9} justifyContent="flex-end" alignItems="center">
        <Text>{deadline}</Text>
      </Flex>
      <Flex px={1} width={1/9} justifyContent="flex-end" alignItems="center">
        <RouterLink to={`/check/${number}`}><LinkAction><FontAwesomeIcon fixedWidth icon="search" /></LinkAction></RouterLink>
        <RouterLink to={`/execute/${number}`}><LinkAction color={Theme.colors[classnames({ "success": status === 1, "grayOff": status === 0})]}><FontAwesomeIcon fixedWidth icon="check-double" /></LinkAction></RouterLink>
      </Flex>
      <Flex px={1} width={2/9} alignItems="center">
        <Text>{id}</Text>
      </Flex>
      <Flex px={1} width={4/9} alignItems="center">
        <Text>{name}</Text>
      </Flex>
    </Flex>
  );
}

export default ScreenInspectionItem;