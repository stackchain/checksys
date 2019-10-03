import { put, takeEvery, call, all } from "redux-saga/effects";

import * as C from "../../utils/constants";

import {
  getNumChecklists,
  getChecklist,
  getAssignment,
  getInspection,
  getTask,
  getCheck
} from "../../apis/checksys"

import {
  success,
  failure
} from "../../redux/checksys/data"

function* request(action) {
  // let checklistInspections = {};
  // TODO: improves like paginator but not on MVP :)
  try {
    // how many checklists
    const c = yield call(getNumChecklists);
    // get all checklists - yes its not optimized - YET
    let callsC = [];
    for (let i = 1; i <= c; i++) { // TODO: it needs tons of improvements 
      callsC.push(call(getChecklist, i));
    }
    let checklists = yield all(callsC);
    // get tasks of all checklists
    let callsT = [];
    checklists.forEach(async (e) => {
      e._tasks = [];
      for (let k = 1; k <= e.numTasks; k++) {
        callsT.push(call(getTask, e.index, k));
      };
    });
    let tasks = yield all(callsT);
    tasks.forEach(e => { // TODO: this should die
      checklists[e.checklist - 1]._tasks[e.task - 1] = e;
    });
    // get how many inspections were assigned to accoutable
    const a = yield call(getAssignment);
    // get the inspections
    let callsI = [];
    for (let j = 1; j <= a; j++) { // TODO: it needs tons of improvements 
      callsI.push(call(getInspection, j));
    }
    let inspections = yield all(callsI);
    // get the checks of that inspection
    let callsV = [];
    inspections.forEach(e => { // TODO: fix it, attaching everything inside inspection -- filter read from state
      e._checks = [];
      e._checklist = checklists[e.checklist - 1];
      if (e._checklist._tasks) {
        for (let k = 1; k <= e._checklist.numTasks; k++) {
          callsV.push(call(getCheck, e.index, k));
        };
      }
    });
    let checks = yield all(callsV);
    checks.forEach(c => {
      inspections[c.inspection - 1]._checks[c.task - 1] = c;
    })

    yield put(success({ checklists, inspections }));
  } catch (err) {
    console.error(err);
    yield put(failure(err));
  }
}

export default [
  takeEvery(C.CHECKSYS_REQUEST, request)
];