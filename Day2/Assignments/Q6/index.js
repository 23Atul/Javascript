// 1. Mapping Array Elements:
// • "Prompt the user to input a list of numbers separated by spaces. Implement a function that uses the map HOF to double each number and display the transformed array."
// • Example Input: "1 2 3 4"
// • Expected Output: "[2, 4, 6, 8]"

let str1 = "1 2 3 4";
let arr1 = str1. split(" "); // string to array, but elements are still string

let res1 = arr1.map((el) => el*2);  // string converts to number explicitly
console.log(res1);



