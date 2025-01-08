

// -----  A R R A Y    M E T H O D S --------


let arr1 = [10, 34, 76, 100, 198];

let arr2 = [77, 19, 99, 81, 191];


// push(item)-- pushes one or more items at end of an array-- returns new length, modifies original array.
// let x = arr1.push("a");  // // 
// let x = arr1.push("a", 1000, "abc");
// let x = arr1.push([1, 2, 3, 4,])


// pop()-- pops out, removes the last element in an array-- returns the poped element, modifies original array.
// let x = arr1.pop()


// shift()-- removes the first element of the array-- returns the removed element, modifies the original array.
// let x = arr1.shift()


// unshift(item)-- adds one or more element at the start of the array-- returns new length and modifies original array.
// let x = arr1.unshift("Atul")
// let x = arr1.unshift([1, 2, 3, 4]);


// concat() -- joins two or more array/values
// let x = arr1.concat(arr2);
// let x = arr1.concat(arr2, [1, 2, 3, 4]);
// let x = arr1.concat(arr2, [1, 2, 3, 4], "a");


// indexOf(item) -- returns the index of first occurance of element if present in array else returns -1.
// let x= arr1.indexOf(100);
// let x = arr1.indexOf("a");


// includes() -- returns T if element is present in array else returns F.
// let x= arr1.includes(100);
// let x = arr1.includes("Atul");


// join(seperator) -- converts array to strings -- default seperator is "," (comma). do not modify original array.
// let x = arr1.join()       
// let x = arr1.join("-")    // // 10-34-76-100-198
// let x = arr1. join("_")   // // 10_34_76_100_198


// slice( start index, end index) -- create new subarray starting from start till end (exclusive). do not modify original array.
// let x= arr1.slice();   // // returns same array; byDefault (start:0, end: arr.length-1)
// let x = arr1.slice(2);  // // starting from 2nd index till end.


// splice( start index, count of elemets) -- starting from the start index deletes the count of elements. returns the removed element and modifies original array
// let x = arr1.splice(1)  //// starting from 1st index delete all the elements



console.log(x);
console.log(arr1);