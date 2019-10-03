import React, { Component } from "react";
import { connect } from 'react-redux'

import ScreenNewChecklist from "../../view/components/layout/NewChecklist";
import { request } from "../redux/checksys/newChecklist"

const mapDispatchToProps = (dispatch) => {
  return {
    request: (data) => dispatch(request(data))
  }
}

class RouteNewChecklist extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      modalControl,
      request
    } = this.props;

    modalControl.onCloseModal();
    request({
      name: e.target.name.value
    })
  }

  render() {
    return(
      <ScreenNewChecklist onSubmit={this.handleSubmit} />
    );
  }
}

export default connect(undefined, mapDispatchToProps)(RouteNewChecklist);