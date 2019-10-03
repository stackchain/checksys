import * as C from "../../utils/constants";

const initialState = {
  status: C.STATUS_UNKNOWN,
  checklists: [],
  inspections: [],
  getTasksFromChecklist: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case C.CHECKSYS_REQUEST:
      return {
        status: C.STATUS_WAITING,
        checklists: [],
        inspections: []
      };
    case C.CHECKSYS_SUCCESS:
      return {
        status: C.STATUS_OK,
        checklists: action.checklists,
        inspections: action.inspections
      };
    case C.CHECKSYS_FAILURE:
      return {
        status: C.STATUS_ERROR,
        checklists: [],
        inspections: []
      };
    case C.GET_TASKS_REQUEST:
      return {
        ...state,
        getTasksFromChecklist: action.checklist,
        status: C.STATUS_WAITING
      }
    case C.GET_TASKS_FAILURE:
      return {
        ...state,
        status: C.STATUS_ERROR
      }
    case C.GET_TASKS_SUCCESS:
      let newState = {...state};
      newState.checklists[action.checklist].tasks = [...action.tasks];
      return {
        ...state,
        ...newState
      }
    default:
      return state;
  }
}

export function request(account) {
  return {
    type: C.CHECKSYS_REQUEST,
    account
  };
}

export function success(data) {
  return {
    type: C.CHECKSYS_SUCCESS,
    ...data
  };
}

export function failure(error) {
  return {
    type: C.CHECKSYS_FAILURE,
    error
  };
}

export function requestTasks(checklist) {
  return {
    type: C.GET_TASKS_REQUEST,
    checklist
  }
}

export function successTasks(checklist, tasks) {
  return {
    type: C.GET_TASKS_REQUEST,
    checklist,
    tasks
  }
}

export function failureTasks(error) {
  return {
    type: C.GET_TASKS_FAILURE,
    error
  };
}
