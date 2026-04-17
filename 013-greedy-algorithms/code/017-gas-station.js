// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.


// Instead of thinking:

// gas[i], cost[i]

// Think:

// net[i] = gas[i] - cost[i]

// This means:

// Positive → you gain fuel
// Negative → you lose fuel

// Example
// gas  = [1, 2, 3, 4, 5]
// cost = [3, 4, 5, 1, 2]

// Convert to net:

// net = [-2, -2, -2, +3, +3]

// What are we really solving?

// We want:

// A starting index such that running sum never goes negative (circularly)


// VISUALIZATION 

// Think of it like a road with fuel gains/losses

// Index:   0    1    2    3    4
// Net:    -2   -2   -2   +3   +3


// GREEDY IDEA

// Once a segment fails:

// [start → i] is useless

// So jump directly to:

// start = i + 1

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function canCompleteCirCuit(gas, cost){
  let n = gas.length;

  for(let start = 0; start < n; start++){
    let fuel = 0;
    let completed = true;

    for(let i = 0; i<n; i++){
      let idx = (start + i) % n;

      fuel += gas[idx] - cost[idx];

      if(fuel < 0){
        completed = false;
        break;
      }
    }

    if (completed) return start;
  }

  return -1;
}


// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(1)

function canCompleteCircuit(gas, cost){
  let n = gas.length;

  let totalFuel = 0;
  let currentFuel = 0;
  let start = 0;

  for(let i = 0; i<n; i++){
    let net = gas[i] - cost[i];

    totalFuel += net;
    currentFuel += net;

    if(currentFuel < 0){
      start = i + 1;
      currentFuel = 0;
    }
  }

  return totalFuel >= 0 ? start : -1;
}

