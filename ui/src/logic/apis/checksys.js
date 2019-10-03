import moment from "moment";

import { storage } from "./contracts";
import networks from "../utils/networks";

// TODO: improve it to curRy
export const coinbase = async () => await window.web3.eth.getCoinbase();
export const network = async () => await window.web3.eth.net.getId();

export const contractStorage = async () => { 
  const net = await network();
  return new window.web3.eth.Contract(storage.abi, storage.address[networks(net).tag]);
}

export const events = async () => {
  const c = await contractStorage();
  return c.events.allEvents();
}

export const createChecklist = async (name) => {
  const c = await contractStorage();
  let receipt = await c.methods.createChecklist(name).send({
    from: await coinbase()
  });
  return receipt;
}

export const assignInspection = async (checklist, accountable, deadline, id) => {
  const c = await contractStorage();
  // TODO: move the transforms into a transform logic component
  const transformedDeadline = moment(deadline).unix();
  const transformedId = window.web3.utils.fromUtf8(id);
  let receipt = await c.methods.assignInspection(checklist, accountable, transformedDeadline, transformedId).send({
    from: await coinbase()
  });
  return receipt;
}

export const setAssignmentDone = async (assignment) => {
  const c = await contractStorage();
  let request = await c.methods.setAssignmentDone(assignment).send.request({
    from: await coinbase()
  });
  return request;
}

export const getTask = async (checklist, task) => {
  const c = await contractStorage();
  let data = await c.methods.getTask(checklist, task).call({
    from: await coinbase()
  });
  data.task = task;
  data.checklist = checklist;
  // TODO: move the transforms into a transform logic component
  data.description = data[0];
  data.rules = Number(data[1]);
  return data;
}

export const getCheck = async (inspection, task) => {
  const c = await contractStorage();
  const from = await coinbase();
  let data = await c.methods.getCheck(from, inspection, task).call({
    from
  });
  data.task = task;
  data.inspection = inspection;
  // TODO: move the transforms into a transform logic component
  data.ok = data[0];
  data.info = data[1];
  data.image = data[2];
  return data;
}

export const addTask = async (checklist, description, rules) => {
  const c = await contractStorage();
  let request = await c.methods.addTask(checklist, description, rules).send.request({
    from: await coinbase()
  });
  return request;
}

export const executeTask = async (assignment, task, ok, info, image) => {
  const c = await contractStorage();
  let request = await c.methods.executeTask(assignment, task, ok, info, image).send.request({
    from: await coinbase()
  });
  return request;
}

export const getNumChecklists = async () => {
  const c = await contractStorage();
  const numChecklists = await c.methods.numChecklists().call({
    from: await coinbase()
  });
  return numChecklists;
}

export const getAssignment = async () => {
  const c = await contractStorage();
  const accountable = await coinbase();
  let assignment = await c.methods.assignments(accountable).call({
    from: accountable
  });
  return Number(assignment);
}

export const getInspection = async (index) => {
  const c = await contractStorage();
  // TODO: when paginate checklist, must get the checklist too - otherwise will miss some info
  const accountable = await coinbase();
  let inspection = await c.methods.getAssignment(accountable, index).call({
    from: await coinbase()
  });
  // TODO: perhaps one day it will reach a big number then it will need some fixes
  inspection.id = window.web3.utils.toUtf8(inspection[0]);
  inspection.deadline = moment.unix(Number(inspection[1])).format("MM/DD/YYYY");
  inspection.checklist = Number(inspection[2]);
  inspection.number = Number(inspection[3]);
  inspection.status = Number(inspection[4]);
  inspection.assignedAt = moment.unix(Number(inspection[5])).format("MM/DD/YYYY");
  inspection.executedAt = moment.unix(Number(inspection[6])).format("MM/DD/YYYY");
  inspection.accountable = accountable;
  inspection.index = index;
  return inspection;
}

export const getChecklist = async (index) => {
  const c = await contractStorage();
  let checklist = await c.methods.checklists(index).call({
    from: await coinbase()
  });
  checklist.index = index;
  return checklist;
}