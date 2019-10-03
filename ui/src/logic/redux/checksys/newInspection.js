import * as C from "../../utils/constants";

const initialState = {
  status: C.STATUS_UNKNOWN
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case C.NEW_INSPECTION_REQUEST:
      return {
        status: C.STATUS_WAITING
      };
    case C.NEW_INSPECTION_SUCCESS:
      return {
        status: C.STATUS_OK
      };
    case C.NEW_INSPECTION_FAILURE:
      return {
        status: C.STATUS_ERROR
      };
    default:
      return state;
  }
}

export function request(inspection) {
  return {
    type: C.NEW_INSPECTION_REQUEST,
    inspection
  };
}

export function success() {
  return {
    type: C.NEW_INSPECTION_SUCCESS
  };
}

export function failure() {
  return {
    type: C.NEW_INSPECTION_FAILURE
  };
}