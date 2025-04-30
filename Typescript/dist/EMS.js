"use strict";
// Project Description:
// You're building a simple employee management module that:
const getBonus = (salary, salaryPercentage) => (salary * 100) / salaryPercentage;
const Employees = [
    {
        name: "shazil",
        age: 20,
        employeId: "101",
        position: "CEO",
        salary: 100000,
        bonusPercentage: 80,
    },
    {
        name: "Abdullah",
        age: 50,
        employeId: "201",
        salary: 60000,
        position: "Manager",
        bonusPercentage: 10,
    },
    {
        name: "Ali",
        age: 43,
        employeId: "301",
        salary: 50000,
        position: "Assistant",
    },
];
function showEmployeDetails(employee) {
    employee.forEach((employee) => {
        console.log(`Employe Name: ${employee.name} \n Employee position: ${employee.position} \n Bonus: ${employee.bonusPercentage
            ? getBonus(employee.salary, employee.bonusPercentage)
            : "No Bonus"}`);
    });
}
const stats = {
    projectsCompleted: 12,
    reating: "A+",
};
Employees[0] && stats;
showEmployeDetails(Employees);
