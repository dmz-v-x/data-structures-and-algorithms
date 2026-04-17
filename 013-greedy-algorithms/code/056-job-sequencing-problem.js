// You are given jobs. Each job has:

// deadline → latest time by which it must be completed
// profit → money you earn if you complete it

// Constraint:

// Each job takes exactly 1 unit of time
// Only 1 job at a time

// Goal:

// Maximize total profit

// Example

// Job   Deadline   Profit
// A     2          100
// B     1          19
// C     2          27
// D     1          25
// E     3          15

// Observation 1:

// “At each time slot, which job should I do?”

// Time slots go from:

// 1 → max deadline

// Here max deadline = 3
// So slots = [1, 2, 3]


// Observation 2:

// Constraint:

// If job deadline = d, it must be done before or at d

// So job with deadline 2 can be done at:

// slot 1 OR slot 2


// Observation 3:

// Greedy Intuition

// If I miss a high-profit job, I lose more money than missing a low-profit job.

// So:

// Always try to pick highest profit jobs first


// Algorithm

// Algorithm Idea (Greedy Strategy)

// Step 1: Sort jobs by profit DESC
// A (100), C (27), D (25), B (19), E (15)

// Step 2: Try placing each job in its latest possible slot

// Why latest?

// Because earlier slots should remain free for tighter-deadline jobs

// Dry Run:

// Slots:
// [1, 2, 3]
// Initially empty

// Step 1: Job A (deadline = 2, profit = 100)

// Try slot 2 → empty → place it

// [ _, A, _ ]

// Step 2: Job C (deadline = 2, profit = 27)

// Try slot 2 → occupied
// Try slot 1 → empty → place it

// [ C, A, _ ]

// Step 3: Job D (deadline = 1, profit = 25)

// Try slot 1 → occupied → cannot place → skip

// Step 4: Job B (deadline = 1, profit = 19)

// Try slot 1 → occupied → skip

// Step 5: Job E (deadline = 3, profit = 15)

// Try slot 3 → empty → place it

// [ C, A, E ]

// 7. Final Answer

// Selected jobs:

// C (27) + A (100) + E (15) = 142


// Time Complexity: O(n log n * n) for each job worst scan: n => O(n * n log n) = O(n ^2)
// 


function jobSequencing(jobs){
  // Step 1: Sort by Profit Descending

  jobs.sort((a, b) => b.profit - a.profit);

  // Step 2: Find Max Deadline

  let maxDeadline = Math.max(...jobs.map(jobs => jobs.deadline));

  // 3. Create slots

  let slots = new Array(maxDeadline).fill(null);

  let totalProfit = 0;

  // 4. iterate jobs

  for(let job of jobs){
    for(let j = job.deadline - 1; j >= 0; j--){
      if(slots[j] === null){
        slots[j] = job;
        totalProfit += job.profit;
        break;
      }
    }
  }
  return totalProfit;
}






