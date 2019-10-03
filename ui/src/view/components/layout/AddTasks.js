import React, { Component } from "react";
import { Flex, Button, Heading, Text } from "rebass";
import Helmet from "react-helmet";

import ScreenInputTask from "../checklist/InputTask";

class ScreenNewChecklist extends Component {
  render() {
    const {
      onSubmit,
      checklist,
      tasks,
      handleTaskAdd,
      handleTaskChangeDescription,
      handleTaskChangeRequireImage,
      handleTaskChangeRequireInfo,
      handleTaskRemove
    } = this.props;

    const {
      name
    } = checklist;

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Add Tasks</title>
        </Helmet>
        <Flex mt={3} flexDirection="column" alignItems="center">
          <Heading>Add Tasks</Heading>
          <Text pt={3} fontWeight="500">{name}</Text>
        </Flex>
        <Flex mt={1} flexDirection="column">
          <hr />
          <form onSubmit={onSubmit}>
            <Flex pt={2} alignItems="center">
              <Flex width={6/9}><Text>Task description</Text></Flex>
              <Flex width={1/9}><Text>Info</Text></Flex>
              <Flex width={1/9}><Text>Image</Text></Flex>
              <Flex width={1/9}><Text></Text></Flex>
            </Flex>
            {
              tasks.map((task, key) => (
                <ScreenInputTask
                  key={key}
                  index={key}
                  task={task}
                  onRemove={handleTaskRemove}
                  onChangeDescription={handleTaskChangeDescription}
                  onChangeRequireInfo={handleTaskChangeRequireInfo}
                  onChangeRequireImage={handleTaskChangeRequireImage}
                />
              ))
            }
            <Flex pt={3} justifyContent="center">
              <Button mx={2} type="button" bg="darkgrey" onClick={handleTaskAdd}>Add new task</Button>
              <Button mx={2} type="submit" bg="secondary">Confirm</Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    );
  }
}

export default ScreenNewChecklist;