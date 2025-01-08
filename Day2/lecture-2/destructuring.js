
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


let arr4 = [[1, 2], [3, 4]];

let [[l, m], [n, o]] = arr4;
// console.log(l,m,n,o);   // [1,2] [3,4] undefined undefined

// console.log(l,m,n,o); // 1 2 3 4




let arr5 = [1, 2, 3, 4,5,6,7,8,9,10];

let [a1,b1,c1]=arr5;
console.log(a1,b1,c1);  // 1 2 3

let [ a2,b2,c2,...rest]=arr5;
console.log(a2,b2,c2,rest);  // 1 2 3 [4,5,6,7,8,9,10]




//-----------------------------------------------------------------------

// object destructuring


let obj1 = {
    name: "Atul",
    age: 24,
    city: "Ranchi"
};

// not recomended approach
let name1 = obj1.name;
let age1 = obj1.age;
let city1 = obj1.city;

// console.log(name1,age1,city1);



let obj2 = {
    name2: "Atul",
    age2: 24,
    city2: "Ranchi"
};

let { name2, age2, city2 } = obj2;
// console.log(name2,age2,city2); // Atul 24 Ranchi



let obj3 = {
    name3: "Atul",
    age3: 24,
    city3: "Ranchi"
};

let { name3, age3, city3, degree3 } = obj3;
// console.log(name3, age3, city3, degree3);  // Atul 24 Ranchi undefined




let obj4 = {
    name4: "Atul",
    age4: 24,
    city4: "Ranchi"
};

let { name4, age4, city4, degree4 = "b.tech" } = obj4;
// console.log(name4, age4, city4, degree4 = "b.tech");   // Atul 24 Ranchi b.tech




let obj5 = {
    name5: "Atul",
    details5: {
        age5: 24,
        city5: "Ranchi"
    }
};

// let { name5, age5, city5 } = obj5;
// console.log(name5, age5, city5); // Atul undefined undefined

// let { name5 ,details5, age5, city5 } = obj5;
// console.log(name5, details5, age5, city5); // Atul {age5:24,city5:"Ranchi"} undefined undefined

let { name5, details5: { age5, city5 } } = obj5;

console.log(name5, age5, city5); // Atul 24 Ranchi




let obj6 = {
    name6: "Atul",
    details6: {
        age6: 24,
        city6: "Ranchi"
    }
};

let { name6: I, details6: { age6: J, city6: K } } = obj6;
console.log(I, J, K);  // Atul 24 Ranchi