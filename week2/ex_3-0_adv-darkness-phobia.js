// DARKNESS PHOBIA
// One family wants to get through a tunnel. Dad can make it in 1 minute, mama in 2 minutes, son in 4 and
// daughter in 5 minutes. Unfortunately, not more than two persons can go through the narrow tunnel at one
// time, moving at the speed of the slower one.
// Can they all make it to the other side if they have a torch that lasts only 12 minutes and they are afraid of the
// dark?

const family = [
    {
        id: 0,
        name: "father",
        speed: 1,
        location: "start",
        hasTotch: false,
    },
    {
        id: 1,
        name: "mother",
        speed: 2,
        location: "start",
        hasTotch: false,
    },
    {
        id: 2,
        name: "son",
        speed: 4,
        location: "start",
        hasTotch: false,
    },
    {
        id: 3,
        name: "daughter",
        speed: 5,
        location: "start",
        hasTotch: false,
    }
]

const torch = 12;

const solution = (team, maxDuration) => {
    //pseudo code
    // 1. Create a list of all possible scenarios
    // 2. Calculate the duration of each scenario based on the speed of each family member
    // 3. Check the duration of each scenario: 
    //   3.1. If there are scenarios whose duration <= maxDuration: 
    //          - success
    //          - print out those scenarios in a human-friendly format         
    //   3.2. If there is not even one such scenario: 
    //          - failure
    //          - print out that the problem has no solution


    let scenarios = []; 
    // Two people go to the other side.
    // One person returns with the torch.
    // Repeat until all are across.
    // Track each scenario to ensure all possibilities are explored.

    let isPossible; // is it possible to cross the tunnel in a time equal to the given duration
}
