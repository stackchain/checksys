import { put, takeEvery, call } from "redux-saga/effects";

import * as C from "../../utils/constants";

import {
  executeTask,
  setAssignmentDone
} from "../../apis/checksys";

import ipfs from "../../apis/ipfs";

import {
  success,
  failure
} from "../../redux/inspection/execute";

function readFile(file) {
  return new Promise((resolve, reject) => {
    let reader = new window.FileReader(); //TODO: maybe this should be a single instance (if it blows up memory)
    reader.onload = (evt) => {
      resolve(Buffer.from(evt.target.result))
    }
    reader.onerror = error => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
}

function callBatch(batch) {
  return new Promise((resolve) => resolve(batch.execute()));
}

function* request(action) {
  try {
    let checks = [];
    let errors = [];

    const {
      inspection,
      check,
      history
    } = action;

    const {
      _checklist
    } = inspection;

    const {
      _tasks
    } = _checklist;

    // TODO: split the validation and the transform 
    // TODO: fix the delete element problem (wont tackle this right now)
    for (var key of check.keys()) {
      let idx = key.indexOf("_");
      let task = Number(key.substr(idx + 1, key.length)) - 1;
      let input = key.substr(0, idx);
      let value = check.get(key);
      let rules = _tasks[task].rules;
      if (idx > 0) {
        if (!checks[task]) checks[task] = {};
        checks[task][input] = value;
        switch(input) {
          case "file":
            if (value.size) {
              try {
                let buffer = yield call(readFile, value);
                value.__hash = yield call(ipfs.files.add, buffer);
              } catch(e) {
                errors.push(e);
              }
            } else {
              // TODO: use filters but I'm an old school guy :/
              if (rules & C.TASK_REQUIRES_IMAGE) {
                errors.push(`Task #${task + 1} - "${_tasks[task].description}" you must provide an IMAGE.`);
              }
            }
            break;
          case "info":
            if (value === "" && rules & C.TASK_REQUIRES_INFO) {
              errors.push(`Task #${task + 1} - "${_tasks[task].description}" you must provide an INFO.`);
            }
            break;
          case "check":
              if (value === "0") {
                errors.push(`Task #${task + 1} - "${_tasks[task].description}" you must report the STATUS.`);
              }
            break;
          default:
            break;
        }
      }
    }
    // TODO: improve validation (UI feedback)
    if (errors.length) {
      alert(errors.join("\n"));
      // throw(new Error(errors.join("\n")));
    }

    let batch = new window.web3.BatchRequest();
    batch.add(yield call(setAssignmentDone, inspection.index));
    for (let i = checks.length; i > 0; i--) {
      let el = checks[i - 1];
      batch.add(yield call(executeTask, inspection.index, i, Number(el.check) > 0, el.info, el.file.__hash ? el.file.__hash[0].hash : ""));
    }
    
    yield call(callBatch, batch);

    history.push("/inspection");

    yield put(success());
  } catch (err) {
    console.log(err);
    yield put(failure(err));
  }
}

export default [
  takeEvery(C.EXECUTE_INSPECTION_REQUEST, request)
];