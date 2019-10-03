pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title Pausable
 * @notice The Pausable enhances a contract with a emergency stop
 */
contract Pausable is Ownable {
    bool private _running;

    constructor () public {
        _running = true;
    }

    /**
     * @notice Get for running
     */
    function running() public view returns (bool) {
        return _running;
    }

    /**
     * @notice isRunning fails if the contract is paused
     */
    modifier isRunning() {
        require(_running, "You need to resume the contract");
        _;
    }

    /**
     * @notice isPaused fails if the contract is running
     */
    modifier isPaused() {
        require(!_running, "You need to pause the contract");
        _;
    }

    /**
     * @notice Pause the contract
     */
    function pause() public onlyOwner isRunning {
        _running = false;
    }

    /**
     * @notice  Resume the contract
     */
    function resume() public onlyOwner isPaused {
        _running = true;
    }

}