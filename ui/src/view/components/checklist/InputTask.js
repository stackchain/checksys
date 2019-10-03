import React from "react";
import { Flex, Box } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Theme from "../../assets/Theme";

const ScreenInputTask = (props) => {
  const {
    task,
    index,
    onRemove,
    onChangeDescription,
    onChangeRequireInfo,
    onChangeRequireImage,
  } = props;

  const {
    description,
    requireInfo,
    requireImage
  } = task;

  return (
    <Flex pb={1} alignItems="center">
      <Flex width={6/9}>
        <input type="text" onChange={onChangeDescription(index)} value={description}></input>
      </Flex>
      <Flex width={1/9}>
        <input type="checkbox" onChange={onChangeRequireInfo(index)} checked={requireInfo}></input>
      </Flex>
      <Flex width={1/9}>
        <input type="checkbox" onChange={onChangeRequireImage(index)} checked={requireImage}></input>
      </Flex>
      <Flex width={1/9}>
        <Box color={Theme.colors.error} css={{":hover": { color: Theme.colors.grayOn }, "cursor": "pointer" }}><FontAwesomeIcon fixedWidth onClick={onRemove(index)} size="sm" icon="trash" /></Box>
      </Flex>
    </Flex>
  );
}

export default ScreenInputTask;