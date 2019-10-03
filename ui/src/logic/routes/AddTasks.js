import React, { Component } from "react";
import { connect } from 'react-redux'

import ScreenAddTasks from "../../view/components/layout/AddTasks";
import { request } from "../redux/checklist/addTasks"

const mapDispatchToProps = (dispatch) => {
  return {
    request: (data) => dispatch(request(data))
  }
}

const blankTask = {
  description: "",
  requireInfo: false,
  requireImage: false
};

class RouteNewChecklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [blankTask]
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      modalControl,
      checklist,
      request
    } = this.props;

    const {
      index
    } = checklist;

    const {
      tasks
    } = this.state;

    modalControl.onCloseModal();
    request({
      index,
      tasks
    })
  }

  handleTaskChangeDescription = (i) => (e) => {
    this.setState({
      tasks: this.state.tasks.map((task, index) => {
        if (i !== index) return task;
        return {
          ...task,
          description: e.target.value
        }
      })
    });
  }
  
  handleTaskChangeRequireInfo = (i) => (e) => {
    this.setState({
      tasks: this.state.tasks.map((task, index) => {
        if (i !== index) return task;
        return {
          ...task,
          requireInfo: e.target.checked
        }
      })
    });
  }
  
  handleTaskChangeRequireImage = (i) => (e) => {
    this.setState({
      tasks: this.state.tasks.map((task, index) => {
        if (i !== index) return task;
        return {
          ...task,
          requireImage: e.target.checked
        }
      })
    });
  }

  handleTaskAdd = () => {
    this.setState({
      tasks: this.state.tasks.concat(blankTask)
    });
  };

  handleTaskRemove = (i) => () => {
    this.setState({
      tasks: this.state.tasks.filter((data, index) => i !== index)
    });
  };

  render() {
    const {
      checklist
    } = this.props;

    return(
      <ScreenAddTasks
        handleTaskRemove={this.handleTaskRemove}
        handleTaskAdd={this.handleTaskAdd}
        handleTaskChangeDescription={this.handleTaskChangeDescription}
        handleTaskChangeRequireImage={this.handleTaskChangeRequireImage}
        handleTaskChangeRequireInfo={this.handleTaskChangeRequireInfo}
        checklist={checklist}
        tasks={this.state.tasks}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default connect(undefined, mapDispatchToProps)(RouteNewChecklist);