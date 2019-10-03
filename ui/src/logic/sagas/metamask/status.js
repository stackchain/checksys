import { put, takeEvery, select } from "redux-saga/effects";

import * as C from "../../utils/constants";

import {
  request
} from "../../redux/checksys/data"

import  {
  unlocked
} from "../../redux/metamask/status"

const { getAccount } = require("../../redux/metamask/status").selectors;

function* setAccount(action) {
  try {
    const currentAccount = yield select(getAccount);
    const newAccount = action.account;
    if (currentAccount === newAccount) return;
    yield put(unlocked(newAccount));
    yield put(request(newAccount));
  } catch (err) {
    // TODO: create a fancy error handling 
    console.error(err);
  }
}

export default [
  takeEvery(C.METAMASK_UPDATE, setAccount)
];