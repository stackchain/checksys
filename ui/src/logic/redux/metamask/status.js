import * as C from "../../utils/constants";

const initialState = {
  status: C.STATUS_UNKNOWN,
  account: undefined,
  network: undefined,
  name: undefined
};

export const selectors = {
  getAccount: state => state.metamaskStatus.account,
  getNetwork: state => state.metamaskStatus.network,
  getName: state => state.metamaskStatus.name
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case C.METAMASK_UNLOCKED:
      return {
        ...state,
        status: C.STATUS_OK,
        account: action.account
      };
    case C.METAMASK_LOCKED:
      return {
        ...state,
        status: C.STATUS_ERROR,
        account: 0
      };
    case C.METAMASK_NETWORK:
      return {
        ...state,
        network: action.network
      }
    case C.METAMASK_ENS:
      return {
        ...state,
        name: action.name
      }
    case C.METAMASK_UPDATE:
    default:
      return state;
  }
}

export function locked() {
  return {
    type: C.METAMASK_LOCKED
  };
}

export function update(account) {
  return {
    type: C.METAMASK_UPDATE,
    account
  }
}

export function network(network) {
  return {
    type: C.METAMASK_NETWORK,
    network
  }
}

export function unlocked(account) {
  return {
    type: C.METAMASK_UNLOCKED,
    account
  };
}

export function ens(name) {
  return {
    type: C.METAMASK_ENS,
    name
  };
}