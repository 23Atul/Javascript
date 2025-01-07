//1
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

function combiningArrays(fruits, vegetables){
    let combine=[...fruits,...vegetables]
    return combine
}
// console.log(combiningArrays(fruits, vegetables));



//2

//Example Invocation:
const person = { name: "John", age: 30, address: "123 Main St" };
 // Output: { name: "John", age: 30, address: "123 Main St" }

function cloningObjects(person){

    let personCopy ={...person};
    return personCopy;
}

// console.log(cloningObjects(person));


//3

//Example Invocation:

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
 // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }


function mergingObjects(student, course){
    let studentWithCourse ={...student,...course}

    return studentWithCourse;
}

// 



//4

//Example Invocation:

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];
 // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

function combiningNestedArrays(array1, array2){
    let combinedArray = [...array1,...array2];
    return combinedArray;
}

// console.log(combiningNestedArrays(array1, array2));