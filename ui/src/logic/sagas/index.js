import { all } from "redux-saga/effects";

import metamask from "./metamask/status";
import checksysData from "./checksys/data";
import newChecklist from "./checksys/newChecklist";
import addTasks from "./checklist/addTasks";
import newInspection from "./checksys/newInspection";
import executeInspection from "./inspection/execute";

function* rootSagas() {
  try {
    yield all([
      ...metamask,
      ...checksysData,
      ...newChecklist,
      ...addTasks,
      ...newInspection,
      ...executeInspection
    ]);
  } catch (e) {
    console.error("Sagas weren't loaded this app won't work at all", e);
  }
}

export default rootSagas;