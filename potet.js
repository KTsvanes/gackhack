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
    const maxCounters = 20 
    const timePerCustomer = 10 // seconds
    const timeGoal = 600 // seconds
    const customers = expectedCustomers[time].customers // Fetches nr of customers for the given time
    const countersOpen = Math.min(Math.ceil(customers * timePerCustomer / timeGoal), maxCounters) // Calculates how many counters are needed
    const queueTime = Math.round(customers * timePerCustomer / countersOpen) // Calculates how long the queue time will be 
    const employeesNeeded = countersOpen * employeesPerCounter // Calculates how many employees are based on the number of counters needed
    const understaffed = queueTime > timeGoal // Checks if the number of employees needed is more than the maximum allowed
    return {
        employeesNeeded: Math.min(employeesNeeded, maxEmpoloyees), // Returns the number of employees needed, but not more than the maximum
        understaffed, // True/False
        queueTime, // Queue time
        countersOpen // Counters open
    }
}

let queueHighest = 0
for (let time = 0; time < expectedCustomers.length; time++) {
    const { employeesNeeded, understaffed, queueTime } = calculateEmployees(time);
    console.log(`At ${expectedCustomers[time].time}, you need ${employeesNeeded} employees.`);
    console.log(`Understaffed: ${understaffed}`);
    console.log(`Queue time: ${queueTime} seconds.`);
    console.log('-----------------------------');
    if (queueHighest < queueTime) {
        queueHighest = queueTime;
    }
}
console.log(`The highest queue time is ${queueHighest} seconds.`)


const select = document.getElementById("timeSelect");
const result = document.getElementById("result");

select.addEventListener("change", function(){
    const index = this.value
    if (index === "") {
        result.textContent = "";
        return;
    }

    const {employeesNeeded, understaffed, queueTime, countersOpen} = calculateEmployees(index);
    const customers =expectedCustomers[index].customers;
    const time = expectedCustomers[index].time;

    result.innerHTML =`
        <b>Time:</b> ${time} <br>
        <b>Customers:</b> ${customers} <br>
        <b>Employees:</b> ${employeesNeeded} <br>
        <b>Counters open:</b> ${countersOpen}/${maxCounters} <br>
        <b>Queue time:</b> ${Math.round(queueTime)} sekunder <br>

        ${understaffed ? "<span style='color:red'>Understaffed</span>" : "<span style='color:green'>OK</span>"}
    `;

});