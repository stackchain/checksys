import React, { Component } from "react";
import { Flex, Text, Box } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import Theme from "../../assets/Theme";
import LinkAction from "../../assets/LinkAction";


// TODO: Move logic to ROUTE component - view is presentational component.
class ScreenExecuteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0
    };
  };

  handleSuccess = () => this.setState({ status: 1 });
  handleError = () => this.setState({ status: -1 });

  render() {
    const {
      description,
      task
    } = this.props;

    const {
      status
    } = this.state;

    return (
      <Flex py={2} alignItems="center">
        <Flex px={1} width={4/9} justifyContent="flex-end" alignItems="center">
          <Text>{description}</Text>
        </Flex>
        <Flex px={1} width={1/9} justifyContent="center" alignItems="center">
          <Box css={{":hover" : { color: Theme.colors.grayOn }, "cursor": "pointer" }} color={Theme.colors[classnames({ "success": status === 1, "grayOff": status === 0 || status === -1 })]} px={1}><FontAwesomeIcon onClick={this.handleSuccess} size="lg" icon="smile" /></Box>
          <Box css={{":hover" : { color: Theme.colors.grayOn }, "cursor": "pointer" }} color={Theme.colors[classnames({ "grayOff": status === 0 || status === 1, "error": status === -1 })]} px={1}><FontAwesomeIcon onClick={this.handleError} size="lg" icon="frown" /></Box>
          <input type="hidden" name={`check_${task}`} value={status} />
          <label htmlFor={`file_${task}`}><LinkAction px={1}><FontAwesomeIcon size="lg" icon={["far", "image"]} /><input type="file" id={`file_${task}`} name={`file_${task}`} style={{display: "none"}}/></LinkAction></label>
        </Flex>
        <Flex px={1} width={3/9} alignItems="center">
          <input type="text" name={`info_${task}`} />
        </Flex>
      </Flex>
    );
  }
}

export default ScreenExecuteItem;