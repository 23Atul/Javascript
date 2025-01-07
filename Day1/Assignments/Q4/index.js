//1
const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

let sal=0
let arr=[]
function highestPaid(employee1){
    let emp1 = employee1.map((el)=>{
        if(el.salary>sal){
            sal=el.salary;
            arr[0]=el;
        }
        return el
        
    });
    return arr[0];
}

// console.log(highestPaid(employees1)); 
 

//2
const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

 // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]


function destructuringToSwap(employees2){
    let emp3=employees2.map((el)=>{
        return el;
    })

    let s=emp3.shift();
    emp3.unshift(emp3.pop())
    emp3.push(s);
    return emp3


}

console.log(destructuringToSwap(employees2));

