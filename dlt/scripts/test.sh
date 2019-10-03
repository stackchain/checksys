#!/usr/bin/env bash

# constants (if you alter here you have to alter .solcover.js truffle.js and package.json)
testrpc_port=8777
ganache_port=8545

# Exit script as soon as a command fails.
set -o errexit

# Executes cleanup function at script exit.
trap cleanup EXIT

cleanup() {
  if [ "$COVERAGE" = true ]; then
    # Kill the testrpc instance that we started (if we started one and if it's still running).
    if [ -n "$testrpc_pid" ] && ps -p $testprc_pid > /dev/null; then
      kill -9 $testprc_pid
      echo "Instance of testrpc-sc killed"
    fi
  else
    # Kill the ganache instance that we started (if we started one and if it's still running).
    if [ -n "$ganache_pid" ] && ps -p $ganache_pid > /dev/null; then
      kill -9 $ganache_pid
      echo "Instance of ganache-cli killed"
    fi

  fi
}

ganache_running() {
  nc -z localhost "$ganache_port"
}

testrpc_running() {
  nc -z localhost "$testrpc_port"
}

start_geth() {
    # We define 10 accounts with balance 1M ether, needed for high-value tests.
  local accounts=(
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501200,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501201,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501202,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501203,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501204,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501205,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501206,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501207,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501208,1000000000000000000000000"
    --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501209,1000000000000000000000000"
  )

  if [ "$COVERAGE" = true ]; then
    if testrpc_running; then
      echo "Using existing testrpc instance"
    else
      echo "Starting your testrpc instance"
      node_modules/.bin/testrpc-sc --gasLimit 0xfffffffffff --port "$testrpc_port" "${accounts[@]}" > /dev/null &
      testprc_pid=$!
    fi
  else
    if ganache_running; then
      echo "Using existing ganache instance"
    else
      echo "Starting your ganache instance"
      node_modules/.bin/ganache-cli --gasLimit 8000000 "${accounts[@]}" > /dev/null &
      ganache_pid=$!
    fi
  fi
}

kill_geth() {
  if [ "$COVERAGE" = true ]; then
    if testrpc_running; then
        echo "Killing existing testrpc instance"
        cleanup
    fi
  else
    if ganache_running; then
        echo "Killing existing ganache instance"
        cleanup
    fi
  fi
}

if [ "$REFRESH" = true ]; then
  kill_geth
fi

start_geth

if [ "$COVERAGE" = true ]; then
  node_modules/.bin/solidity-coverage
else
  node_modules/.bin/truffle test "$@" --verbose --show-events
fi