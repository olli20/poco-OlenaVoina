// Combining Arrays and Objects
// Create an array of objects representing employees with properties name, age, and department. Write a function that groups employees by department.

// const employees = [
//     {
//         name: "Alice Johnson",
//         age: 29,
//         department: "Marketing"
//     },
//     {
//         name: "Bob Smith",
//         age: 35,
//         department: "Sales"
//     },
//     {
//         name: "Charlie Brown",
//         age: 42,
//         department: "Human Resources"
//     },
//     {
//         name: "Diana Prince",
//         age: 31,
//         department: "IT"
//     },
//     {
//         name: "Ethan Hunt",
//         age: 28,
//         department: "Operations"
//     },
//     {
//         name: "Fiona Green",
//         age: 38,
//         department: "Marketing"
//     }
// ];

// const departments = employees.map(item => item.department);

// const groupedEmployees = employees.filter(item => item.department === "merketing");


 // output format?


const groupedEmployees = {
    Marketing: [
        { name: "Alice Johnson", age: 29, department: "Marketing" }, 
        { name: "Fiona Green", age: 38, department: "Marketing" }
    ],
    Sales: [
        { name: "Bob Smith", age: 35, department: "Sales" }
    ],
    "Human Resources": [
        { name: "Charlie Brown", age: 42, department: "Human Resources" }
    ],
    IT: [
        { name: "Diana Prince", age: 31, department: "IT" }
    ],
    Operations: [
        { name: "Ethan Hunt", age: 28, department: "Operations" }
    ],
}

for (const department in groupedEmployees) {
    console.log(`Department: ${department}`);
    
    groupedEmployees[department].forEach(employee => {
        console.log(`Employee Name: ${employee.name}, Age: ${employee.age}`);
    });
}