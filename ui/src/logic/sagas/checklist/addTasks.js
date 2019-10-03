import { put, takeEvery, call } from "redux-saga/effects";

import * as C from "../../utils/constants";

import {
  addTask
} from "../../apis/checksys"

import {
  success,
  failure
} from "../../redux/checklist/addTasks"

function taskRules(info, image) {
  // TODO if add a new rule better switch to a XOR
  return ((info ? C.TASK_REQUIRES_INFO : 0) + (image ? C.TASK_REQUIRES_IMAGE : 0))
}
 
function* request(action) {
  try {
    let batch = new window.web3.BatchRequest();
    const tasks = action.data.tasks || [];
    for (let i = tasks.length; i > 0; i--) {
      batch.add(yield call(addTask, action.data.index, tasks[i - 1].description, taskRules(tasks[i - 1].requireInfo, tasks[i - 1].requireImage)));
    }
    batch.execute();
    yield put(success(null));
  } catch (err) {
    console.log(err);
    yield put(failure(err));
  }
}

export default [
  takeEvery(C.ADD_TASKS_REQUEST, request)
];