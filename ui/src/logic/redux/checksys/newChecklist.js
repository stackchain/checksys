import * as C from "../../utils/constants";

const initialState = {
  status: C.STATUS_UNKNOWN
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case C.NEW_CHECKLIST_REQUEST:
      return {
        status: C.STATUS_WAITING
      };
    case C.NEW_CHECKLIST_SUCCESS:
      return {
        status: C.STATUS_OK
      };
    case C.NEW_CHECKLIST_FAILURE:
      return {
        status: C.STATUS_ERROR
      };
    default:
      return state;
  }
}

export function request(data) {
  return {
    type: C.NEW_CHECKLIST_REQUEST,
    data
  };
}

export function success() {
  return {
    type: C.NEW_CHECKLIST_SUCCESS
  };
}

export function failure(error) {
  return {
    type: C.NEW_CHECKLIST_FAILURE,
    error
  };
}