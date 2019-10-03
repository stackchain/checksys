const Web3 = require("web3");
const web3 = new Web3();
const ta = require('truffle-assertions');

const Storage = artifacts.require("./Storage.sol");

let storage;

const checklistName = "Boing A320-B Type C";
const tasks = [
  "Measure the OIL level of engine 1 it must be between 2 and 4",
  "Measure the OIL level of engine 2 it must be between 4 and 6",
  "Check the 4 external lights R1 R2 L1 L2"
]
const rules = [
  0,
  1,
  3
]
const ids = [
  "A320 B Type D",
  "B727 A Type C"
]
const infos = [
  "check ok",
  "unable to check"
]
const images = [
  "bzz://somewhere",
  "ipfs://elsewhere"
]

contract("Storage", accounts => {
  before(async function () {
    storage = await Storage.new();
    console.log("Storage contract address: ", storage.address);
    console.log("Storage contract abi: ", JSON.stringify(storage.abi, null, 2));
  });

  describe("Checklist", async () => {
    describe("createChecklist()", async () => {
      it(`Should create a checklist with the name: "${checklistName}"`, async () => {
        const { logs: [ NewChecklist ] } = await storage.createChecklist(checklistName);
        const { checklist, name } = NewChecklist.args;
        expect(checklist.toNumber()).equal(1);
        expect(name).equal(checklistName);
        expect((await storage.checklists(1))[0]).equal(checklistName);
      });
      it(`Should fail if the name is empty`, async () => {
        await ta.reverts(storage.createChecklist(""), "Checklist name is required");
      });

    });
    describe("addTask() && getTask()", async () => {
      it(`Should add and get a task with the description: "${tasks[0]}" and rule: "${rules[0]}" `, async () => {
        await storage.addTask(1, tasks[0], rules[0]);
        expect((await storage.getTask(1, 1))[0]).equal(tasks[0]);
      });
    });
    describe("setChecklistReady()", async () => {
      it(`Should change the checklist status to Ready`, async () => {
        await storage.setChecklistReady(1);
        // BigNumber web3 now need fix
        // expect(ChecklistReady.args).to.eql({ _checklist: 1 });
        expect(((await storage.checklists(1))[2]).toNumber()).equal(1);
      });
    });
  });
  describe("Inspection", async () => {
    describe("assignInspection() && getAssigment()", async () => {
      it(`Should assign "${ids[0]}" to the accountable "${accounts[0]}"`, async () => {
        await storage.assignInspection(1, accounts[0], 0, ids[0]);
        let myInspection = (await storage.getAssignment(accounts[0], 1));
        expect(web3.utils.toUtf8(myInspection[0])).equal(ids[0]);
        expect(myInspection[1].toNumber()).equal(0);
        expect(myInspection[2].toNumber()).equal(1);
        expect(myInspection[3].toNumber()).equal(1);
        expect(myInspection[4].toNumber()).equal(0);
      });
    });
    describe("executeTask() && getCheck()", async () => {
      it(`Should execute a task with these conditions "true,${infos[0]},${images[0]}"`, async () => {
        await storage.executeTask(1, 1, true, infos[0], images[0]);
        let myCheck = (await storage.getCheck(accounts[0], 1, 1));
        expect(myCheck[0]).to.be.ok;
        expect(myCheck[1]).equal(infos[0]);
        expect(myCheck[2]).equal(images[0]);
      });
    });
    describe("setAssignmentDone()", async () => {
      it(`Should change the inspection status to Done`, async () => {
        await storage.setAssignmentDone(1);
        let myInspection = (await storage.getAssignment(accounts[0], 1));
        expect(myInspection[4].toNumber()).equal(1);
      });
    });
  });
});