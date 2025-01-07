//1

//Example Invocation:
const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

function employeeInformation(employees1){
//     let secondEmployee = employees[1];
//     let obj={}
//     obj.secondEmployeeName=secondEmployee.name;
//     obj.secondEmployeeDepartment=secondEmployee.department
//     return obj;


    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees1[1];
    return { secondEmployeeName, secondEmployeeDepartment };

}

// console.log(employeeInformation(employees));




//2
//Example Invocation:

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// Output: 60000

function averageSalary(employees2){
    let sum=0
    let n=employees2.length;
    for(i of employees2){

        sum+=i.salary
    }

    return sum /n
}

// console.log(averageSalary(employees2)); 



//3

//Example Invocation:

const employees3 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

 // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"

function thirdEmployeeInfo(employees3){
    let { name: Employee ,age:Age, salary:Salary }=employees3[2];
    let Bonus=Salary/10;
    
    return ({ Employee, Age,Salary,Bonus})
}


console.log(thirdEmployeeInfo(employees3));
