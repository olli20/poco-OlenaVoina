// Combining Arrays and Objects
// Create an array of objects representing employees with properties name, age, and department. Write a function that groups employees by department.

const employees = [
    { name: "Alice Johnson", age: 29, department: "Marketing" },
    { name: "Bob Smith", age: 35, department: "Sales" },
    { name: "Charlie Brown",age: 42, department: "HR" },
    { name: "Diana Prince", age: 31, department: "IT" },
    { name: "Ethan Hunt", age: 28, department: "Operations" },
    { name: "Fiona Green", age: 38, department: "Marketing" },
];

const uniqueDepartments = [...new Set(employees.map(item => item.department))];

const groupByDepartment = (departments, originalArray) => {
    const groupedArray = {};

    departments.forEach(deparment => {
        const group = originalArray.filter(item => item.department === deparment);
        groupedArray[deparment] = group;
    })

    return groupedArray;
}

const employeesByDepartment = groupByDepartment(uniqueDepartments, employees);

console.log(employeesByDepartment);


// OUTPUT FORMAT

// const groupedEmployees = {
//     Marketing: [
//         { name: "Alice Johnson", age: 29, department: "Marketing" }, 
//         { name: "Fiona Green", age: 38, department: "Marketing" }
//     ],
//     Sales: [
//         { name: "Bob Smith", age: 35, department: "Sales" }
//     ],
//     "Human Resources": [
//         { name: "Charlie Brown", age: 42, department: "Human Resources" }
//     ],
//     IT: [
//         { name: "Diana Prince", age: 31, department: "IT" }
//     ],
//     Operations: [
//         { name: "Ethan Hunt", age: 28, department: "Operations" }
//     ],
// }
//
// getting employees from the grouped array
// for (const department in employeesByDepartment) {
//     console.log(`Department: ${department}`);
    
//     employeesByDepartment[department].forEach(employee => {
//         console.log(`Employee Name: ${employee.name}, Age: ${employee.age}`);
//     });
// }