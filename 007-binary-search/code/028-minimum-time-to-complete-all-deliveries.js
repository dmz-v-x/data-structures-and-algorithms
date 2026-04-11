// You have:

// d = [d1, d2] → deliveries required
// r = [r1, r2] → recharge intervals

// Rules:

// Each delivery = 1 hour
// Only one drone works per hour

// Drone i cannot work at hours:

// multiples of r[i]

// Reframing: If total time = T → can we finish all deliveries? -> This leads to binary search.

---

// In time T, total hours = T

// Drone i cannot work at:

// multiples of r[i]

// So blocked hours:

// floor(T / r[i])

// Available working hours for drone i:
// work_i = T - floor(T / r[i])

// Only ONE drone can work at a time

// We don’t care about exact schedule.

// We just need to check:

// Can we assign hours to drones so that:
// - drone 1 gets ≥ d1 hours
// - drone 2 gets ≥ d2 hours

// Now

// Some hours may be:

// | Hour Type         | Meaning       |
// | ----------------- | ------------- |
// | Free for both     | both can work |
// | Only drone 1 free | only drone 1  |
// | Only drone 2 free | only drone 2  |
// | None free         | useless       |


// Total hours = T

// Blocked for drone 1:
// A = floor(T / r1)

// Blocked for drone 2:
// B = floor(T / r2)

// Blocked for BOTH:
// C = floor(T / lcm(r1, r2))


// Both can work:
// both = T - (A + B - C)

// Only drone 1 can work:
// only1 = B - C

// Only drone 2 can work:
// only2 = A - C

