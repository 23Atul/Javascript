// -------- H I G H E R   O R D E R   F U N C T I O N ---------

// any function which accepts function as an argument or return a function then it is called higher order function or HOF.

// these all are array methods.

// -- forEach   ==>     array     -->     forEach     -->     undefined
// -- map       ==>     array     -->     map         -->     array
// -- filter    ==>     array     -->     filter      -->     array
// -- reduce    ==>     array     -->     reduce      -->     single value

let arr = ["Atul", "Raman", "Roma", "Ram", "Amit", "Krishna", "Supriti"];

// forEach(cb) --> cb(element, index, array)

let arr1 = arr.forEach((el, i, arr) => { // for each element in arr, cb function is getting called.
    // console.log(i, el, arr);
    return el;
})

// console.log(arr1);  // undefined, as forEach does not return anything




// map(cb) --> cb(element, index, array)

let arr2 = arr.map((el, i, arr) => {
    // console.log(i,el,arr);
    return el + 0;
})

// console.log(arr2);  // ['Atul0', 'Raman0', 'Roma0', 'Ram0', 'Amit0', 'Krishna0', 'Supriti0']


// filter(cb) --> cb(element, index, array)

let arr3 = arr.filter((el, i, arr) => {
    return el.length % 2 == 0;
})

// console.log(arr3);  // ['Atul', 'Roma', 'Amit']



// reduce(cb)  --> cb(acc, element, index, array)

let array = [10, 23, 55, 89, 101];


// accumulator (acc) :
// -- without initial value     --  1st array element will be assigned to acc and el will take 2nd element of array.
// -- with initial value        --  acc will take the value passed and el will take 1st element of array.


// without initial value
let arr4 = array.reduce((acc, el, i, arr) => {
    return acc + el;
});  // acc=10, el=23

// console.log(arr4);


// with initial value
let arr5 = array.reduce((acc, el, i, arr) => {
    return acc + el;
},20)  // acc=20, el= 10

// console.log(arr5);



// --- C H A I N I N G ---

// find sum of cube of elements divisible by 3

let num = [ 1,2,3,4,5,6,7,8,9];

let f= num.filter((el)=>el%3==0).reduce((acc,el)=>{
    return
    (
        acc+el**3
    )
},0)

// console.log(f);

//-----------------------------------------------------------------------------------------

// sum of length of strings whose length is odd.

let len = arr.filter((el)=>el.length%2!==0).reduce((acc,el)=> {
    return acc + el.length;
},0)

console.log(len); //22




