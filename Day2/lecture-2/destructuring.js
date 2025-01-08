
//----------------- D E S T R U C T U R I N G -----------------

// array destructuring 

let details = ["atul", 24, "Ranchi", "B.tech"]


// this process is not advicable when array size is large
// let name = details[0]
// let age = details[1]
// let city = details[2]
// let degree = details[3]

// console.log(name, age, city, degree);


let [name, age, city, degree] = details;

// console.log(name, age, city, degree);

let arr1 = [1, 2, 3, 4];
let [a, b, c, d, e] = arr1;
//  console.log(a,b,c,d,e); // 1 2 3 4 undefined



let arr2 = [1, 2, 3, 4];
let [p, q, , s] = arr2;
// console.log(p,q,r,s); // refference error
// console.log(p,q,s); // 1 2 4


let arr3 = [1, 2, 3]
let [w, x, y, z = 99] = arr3;
// console.log(w,x,y,z); // 1 2 3 99
// if arr3=[1,2,3,4] then z will be overwriten by 4


let arr4 = [[1,2],[3,4]];

let [[l,m],[n,o]] = arr4;
// console.log(l,m,n,o);   // [1,2] [3,4] undefined undefined

console.log(l,m,n,o); // 1 2 3 4







