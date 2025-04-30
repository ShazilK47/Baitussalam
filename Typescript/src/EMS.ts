// Project Description:
// You're building a simple employee management module that:

// Stores a list of employees

// Calculates their bonuses

// Displays information conditionally based on optional properties

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeId: string;
  position: string;
  salary: number;
  bonusPercentage?: number;
}

interface BonusCalculator {
  (salary: number, bonusPercentage: number): number;
}

const getBonus: BonusCalculator = (salary, salaryPercentage) =>
  (salary * 100) / salaryPercentage;

const Employees: Employee[] = [
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

function showEmployeDetails(employee: Employee[]): void {
  employee.forEach((employee) => {
    console.log(
      `Employe Name: ${employee.name} \n Employee position: ${
        employee.position
      } \n Bonus: ${
        employee.bonusPercentage
          ? getBonus(employee.salary, employee.bonusPercentage)
          : "No Bonus"
      }`
    );
  });
}

interface EmployeeStats {
  [key: string]: string | number;
}

const stats: EmployeeStats = {
  projectsCompleted: 12,
  reating: "A+",
};

Employees[0] && stats;

showEmployeDetails(Employees);
