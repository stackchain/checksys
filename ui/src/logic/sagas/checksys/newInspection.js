import { put, takeLatest, call } from "redux-saga/effects";

import * as C from "../../utils/constants";

import {
  assignInspection
} from "../../apis/checksys"

import {
  success,
  failure
} from "../../redux/checksys/newInspection"

function* request(action) {
  try {
    const {
      checklist,
      accountable,
      deadline,
      id
    } = action.inspection;
    const data = yield call(assignInspection, checklist, accountable, deadline, id);
    yield put(success(data));
  } catch (err) {
    console.log(err);
    yield put(failure(err));
  }
}

export default [
  takeLatest(C.NEW_INSPECTION_REQUEST, request)
];