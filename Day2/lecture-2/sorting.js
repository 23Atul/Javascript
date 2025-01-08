
// -------- S O R T I N G ----------

let arr = [53, 45, 64, 646, 6466, 66, 556, 575, 6, 45, 44];

// sorting in JS works differetly, in JS values are sorted on the basis of ascii code.

// console.log(arr.sort()); //[44, 45, 45, 53, 556, 575, 6, 64, 646, 6466, 66]
// console.log(arr); // changes original array
//-----------------------------------------------------------------------------------------------------

//----------  sorting array of integers --------

// sorting -->  sort(cb)

// a-b --> if +ve ie. a>b return (b,a) and  if -ve ie. b>a return (a,b) 

// Ascending Order
let asc = arr.sort((a, b) => a - b);
console.log(asc); // [1,2,3,4]

// Descending Order
let desc = arr.sort((a, b) => b - a);
console.log(desc); // [4,3,2,1]



// ----------- sorting array of strings ----------

let str = ['b', 'z', 'x', 'a', 'w', 's'];


// Ascending
let strAsc = str.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});

console.log(strAsc);


// Descending
let strDesc = str.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
});

console.log(strDesc);


