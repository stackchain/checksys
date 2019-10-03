import React from "react";
import { Flex, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LinkAction from "../../assets/LinkAction";
import * as C from "../../../logic/utils/constants";

const ScreenChecklistItem = (props) => {
  const {
    checklist,
    newItem
  } = props;

  const {
    name
  } = checklist;

  return (
    <Flex py={2} alignItems="center">
      <Flex px={1} width={1/3} justifyContent="flex-end" alignItems="center">
        <LinkAction><FontAwesomeIcon fixedWidth onClick={() => newItem(C.INSPECTION, checklist)} icon="user-check" /></LinkAction>
        <LinkAction><FontAwesomeIcon fixedWidth onClick={() => newItem(C.TASK, checklist)} icon="tasks" /></LinkAction>
      </Flex>
      <Flex  px={1} width={2/3} alignItems="center">
        <Text>{name}</Text>
      </Flex>
    </Flex>
  );
}

export default ScreenChecklistItem;