const expectedCustomers = [
    {time: "05:00", customers: 50},
    {time: "05:30", customers: 300},
    {time: "06:00", customers: 700},
    {time: "06:30", customers: 1400},
    {time: "07:00", customers: 2300},
    {time: "07:30", customers: 1900},
    {time: "08:00", customers: 1200},
    {time: "08:30", customers: 800},
    {time: "09:00", customers: 850},
    {time: "09:30", customers: 900},
    {time: "10:00", customers: 1200},
    {time: "10:30", customers: 1300},
    {time: "11:00", customers: 950},
    {time: "11:30", customers: 800},
    {time: "12:00", customers: 800},
    {time: "12:30", customers: 750},
    {time: "13:00", customers: 1150},
    {time: "13:30", customers: 1300},
    {time: "14:00", customers: 1400},
    {time: "14:30", customers: 1200},
    {time: "15:00", customers: 1400},
    {time: "15:30", customers: 1500},
    {time: "16:00", customers: 1600},
    {time: "16:30", customers: 1200},
    {time: "17:00", customers: 1000},
    {time: "17:30", customers: 800},
    {time: "18:00", customers: 700},
    {time: "18:30", customers: 600},
    {time: "19:00", customers: 500},
    {time: "19:30", customers: 400},
    {time: "20:00", customers: 250},
    {time: "20:30", customers: 200},
    {time: "21:00", customers: 100},
    {time: "21:30", customers: 50}
]


function calculateEmployees(time) { 
    const maxEmpoloyees = 100
    const employeesPerCounter = 5
    const numberOfCounters = 20 
    const timePerCustomer = 10 // seconds
    const timeGoal = 600 // seconds
    const customers = expectedCustomers[time].customers // Fetches nr of customers for the given time
    const countersOpen = customers * timePerCustomer / timeGoal // Calculates how many counters are needed
    const employeesNeeded = Math.ceil(countersOpen) * employeesPerCounter // Calculates how many employees are based on the number of counters needed
    const understaffed = employeesNeeded > maxEmpoloyees // Checks if the number of employees needed is more than the maximum allowed
    return {employeesNeeded: Math.min(employeesNeeded, maxEmpoloyees), understaffed } // Returns the number of employees needed, but not more than the maximum 
}

for (let time = 0; time < expectedCustomers.length; time++) {
    const { employeesNeeded, understaffed } = calculateEmployees(time);
    console.log(`At ${expectedCustomers[time].time}, you need ${employeesNeeded} employees.${understaffed ? " (Understaffed)" : ""}`);
}