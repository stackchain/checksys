import React, { Component } from "react";
import { Flex, Heading, Text } from "rebass";
import Helmet from "react-helmet";
import Modal from "react-responsive-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LinkAction from "../../assets/LinkAction";
import * as C from "../../../logic/utils/constants";

import ChecklistItem from "../checklist/Item";
import RouteNewChecklist from "../../../logic/routes/NewChecklist";
import RouteNewInspection from "../../../logic/routes/NewInspection";
import RouteAddTasks from "../../../logic/routes/AddTasks";

class ScreenChecklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: C.CHECKLIST,
      checklist: undefined
    }
  }

  render() {
    const {
      checklists,
      modalControl
    } = this.props;

    const newItem = (item, checklist) => {
      this.setState({
        item,
        checklist
      });
      modalControl.onOpenModal();
    }

    return (
      <Flex px={2} alignItems="center" flexDirection="column">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Checksys | Checklists</title>
          <link rel="canonical" href="%PUBLIC_URL%/checklists" />
        </Helmet>
        <Flex py={10} alignItems="center">
          <Heading pr={2}>Checklists</Heading>
        </Flex>
        <Flex py={2} alignItems="center">
          <LinkAction>
            <Flex alignItems="center">
              <Flex px={1} width={1/3} justifyContent="flex-end">
                <FontAwesomeIcon fixedWidth size="2x" onClick={() => newItem(C.CHECKLIST)} icon="clipboard-check" />
              </Flex>
              <Flex px={1} width={2/3}>
                <Text>Create checklist</Text>
              </Flex>
            </Flex>
          </LinkAction>
        </Flex>
        <Flex width={1} flexDirection="column">
          <Flex py={2} alignItems="center">
            <Flex px={1} width={1/3} justifyContent="flex-end" alignItems="center">
              <Text fontWeight="700" alignItems="center">Actions</Text>
            </Flex>
            <Flex px={1} width={2/3} alignItems="center">
              <Text fontWeight="700">Name</Text>
            </Flex>
          </Flex>
          { checklists.map((item, key) => {
              return <ChecklistItem newItem={newItem} key={key} checklist={item} />
            })
          }
        </Flex>
        <Modal open={modalControl.open} onClose={modalControl.onCloseModal}>
          { this.state.item === C.INSPECTION && <RouteNewInspection checklist={this.state.checklist} modalControl={modalControl} /> }
          { this.state.item === C.CHECKLIST && <RouteNewChecklist modalControl={modalControl} /> }
          { this.state.item === C.TASK && <RouteAddTasks checklist={this.state.checklist} modalControl={modalControl} /> }
        </Modal>
      </Flex>
    );
  }
}

export default ScreenChecklist;