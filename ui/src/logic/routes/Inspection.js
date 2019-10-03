import React, { Component } from "react";
import { connect } from "react-redux";

import ScreenInspection from "../../view/components/layout/Inspection";

const mapStateToProps = state => {
  return {
    inspections: state.checksysData.inspections,
    checklists: state.checksysData.checklists
  }
}

class RouteInspection extends Component {
  render() {
    const {
      inspections,
      checklists
    } = this.props;

    return(
      <ScreenInspection inspections={inspections} checklists={checklists} />
    );
  }
}

export default connect(mapStateToProps)(RouteInspection);