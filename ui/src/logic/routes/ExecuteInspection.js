import React, { Component } from "react";
import { connect } from 'react-redux';

import ScreenExecuteInspection from "../../view/components/layout/ExecuteInspection";
// import ScreenNotFound from "../../view/components/layout/NotFound";
import { request } from "../redux/inspection/execute";

const mapDispatchToProps = (dispatch) => {
  return {
    request: (inspection, check, history) => dispatch(request(inspection, check, history))
  };
};

const mapStateToProps = state => {
  return {
    inspections: state.checksysData.inspections
  };
};

class RouteExecuteInspection extends Component {
  handleSubmit = (inspection, history) => (e) => {
    e.preventDefault();
    const {
      request
    } = this.props;

    request(inspection, new window.FormData(e.target), history);
  }
  
  // TODO help joao

  render() {
    const {
      match,
      history,
      inspections = []
    } = this.props;

    const [ inspection ] = inspections.filter((i) => i.number === Number(match.params.number));

    if (inspection) {
      return(
        <ScreenExecuteInspection onSubmit={this.handleSubmit(inspection, history)} inspection={inspection} />
      );
    }

    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteExecuteInspection);