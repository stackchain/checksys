import React, { Component } from "react";
import { connect } from 'react-redux';

import ScreenCheckInspection from "../../view/components/layout/CheckInspection";

const mapStateToProps = state => {
  return {
    inspections: state.checksysData.inspections
  };
};

class RouteCheckInspection extends Component {
  render() {
    const {
      match,
      history,
      inspections = []
    } = this.props;

    const [ inspection ] = inspections.filter((i) => i.number === Number(match.params.number));

    if (inspection) {
      return(
        <ScreenCheckInspection history={history} inspection={inspection} />
      );
    }

    return null;
  }
}

export default connect(mapStateToProps)(RouteCheckInspection);