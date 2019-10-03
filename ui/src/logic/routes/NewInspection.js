import React, { Component } from "react";
import { connect } from 'react-redux'

import ScreenNewInspection from "../../view/components/layout/NewInspection";
import { request } from "../redux/checksys/newInspection";

const mapDispatchToProps = dispatch => {
  return {
    request: data => dispatch(request(data))
  }
}

class RouteNewInspection extends Component {
  handleSubmit = (checklist) => (e) => {
    e.preventDefault();
    const {
      modalControl,
      request
    } = this.props;

    modalControl.onCloseModal();
    request({
      checklist: checklist.index,
      accountable: e.target.accountable.value,
      deadline: e.target.deadline.value,
      id: e.target.id.value
    })
  }

  render() {
    const {
      checklist
    } = this.props;

    return(
      <ScreenNewInspection onSubmit={this.handleSubmit(checklist)} checklist={checklist} />
    );
  }
}

export default connect(undefined, mapDispatchToProps)(RouteNewInspection);