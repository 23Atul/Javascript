//1
//Example Invocation:
const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

 // Output: ['Jane Smith', 'Maria Lopez']

function employeesInDepartment(employees1, dep){
    let x = employees1.filter( (ele)=>{
        if (ele.department === dep) {
            return ele.name

        }

    }).map((el) => {
        if (el.department === dep) {
            return el.name;
        }
    })
    return x
    
}

// console.log(employeesInDepartment(employees1, "Finance"));



//2
//Example Invocation:
const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

 // Output: 125000

function totalSalaryByDepartment(employees2,dep){
    let emp2= employees2.filter((el)=>{
        if (el.department===dep){
            return el.salary
        }
    }).map((el)=>{
        if (el.department===dep){
            return el.salary
        }
    }).reduce((acc,el)=>{
        return acc+el;
    },0)
    return emp2
}

// console.log(totalSalaryByDepartment(employees2, "Finance"));



//3

//Example Invocation:
const employees3 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
    { name: "Maria Lopez", age: 29, department: "Finance", salary: 65000 },
];

// Output: [
//   "Employee John Doe works in HR department and earns $50000 annually.",
//   "Employee Jane Smith works in Finance department and earns $60000 annually.",
//   "Employee Alex Johnson works in IT department and earns $70000 annually.",
//   "Employee Maria Lopez works in Finance department and earns $65000 annually."
// ]

function employeeSummary(employees3){
    let emp3 = employees3.map((el)=>{

        return el
    })
    let z=emp3.map((e) => { return(`Employee ${e.name} works in ${e.department} department and earns $${e.salary} annually.`)});
    return z;
}

console.log(employeeSummary(employees3));
