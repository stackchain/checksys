import React, { Component } from "react";
import { connect } from "react-redux";

import ScreenChecklist from "../../view/components/layout/Checklist";

const mapStateToProps = state => {
  return {
    checklists: state.checksysData.checklists
  }
}

class RouteChecklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  onOpenModal = (checklist) => {
    this.setState({
      showModal: true
    });
  };

  onCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const {
      showModal
    } = this.state;

    const modalControl = {
      open: showModal,
      onCloseModal: this.onCloseModal,
      onOpenModal: this.onOpenModal
    };

    return(
      <ScreenChecklist modalControl={modalControl} checklists={this.props.checklists} />
    ); 
  }
}

export default connect(mapStateToProps)(RouteChecklist);