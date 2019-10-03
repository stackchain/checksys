import * as C from "../../utils/constants";

const initialState = {
  status: C.STATUS_UNKNOWN
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case C.ADD_TASKS_REQUEST:
      return {
        status: C.STATUS_WAITING
      };
    case C.ADD_TASKS_SUCCESS:
      return {
        status: C.STATUS_OK
      };
    case C.ADD_TASKS_FAILURE:
      return {
        status: C.STATUS_ERROR
      };
    default:
      return state;
  }
}

export function request(data) {
  return {
    type: C.ADD_TASKS_REQUEST,
    data
  };
}

export function success() {
  return {
    type: C.ADD_TASKS_SUCCESS
  };
}

export function failure(error) {
  return {
    type: C.ADD_TASKS_FAILURE,
    error
  };
}