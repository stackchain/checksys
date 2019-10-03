# Design patterns decisions

Due the lack of time to finish all desirable implementation, therefore some of them are commented inside the source code, other just the initial concept.

### Patterns
Category | Pattern | Where
---------|---------|------
Action and control | State Machine | It's only possible to assign a inspection if the checklist is ready (**commented atm**)
Authorization | Ownership | Only the owner is able to: create new checklists, add tasks, pause the contract, kill the contract
Lifecycle | Mortal | The contract can be killed by the owner
Maintenance | Data segregation | The name of contract is Storage because the ideia is to separate the logic from the storage layer but didn't have time (**initial concept**)
Security | Emergency stop | The solution implements a Pausable contract that allows to pause and resume the contract
Secuirty | Checks->Effects->Interaction | You will find this pattern all over the solution