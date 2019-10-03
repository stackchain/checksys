import { put, takeEvery, call } from "redux-saga/effects";

import * as C from "../../utils/constants";

import {
  createChecklist
} from "../../apis/checksys"

import {
  success,
  failure
} from "../../redux/checksys/newChecklist"
 
function* request(action) {
  try {
    yield call(createChecklist, action.data.name);
    yield put(success(null));
  } catch (err) {
    console.log(err);
    yield put(failure(err));
  }
}

export default [
  takeEvery(C.NEW_CHECKLIST_REQUEST, request)
];