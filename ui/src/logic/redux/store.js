import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux";
import createSagaMiddleware from "redux-saga";

import { 
  loadingBarReducer,
  loadingBarMiddleware
} from 'react-redux-loading-bar';

import sagas from "../sagas";

import metamaskStatus from "./metamask/status";
import checksysData from "./checksys/data";

export default function() {

  const reducer = combineReducers({
    metamaskStatus,
    checksysData,
    loadingBar: loadingBarReducer
  })

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(loadingBarMiddleware({
      promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    }))
  );

  const store = createStore(
    reducer,
    enhancer
  );

  sagaMiddleware.run(sagas);

  return store;
}