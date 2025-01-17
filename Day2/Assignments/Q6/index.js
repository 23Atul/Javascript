// 1. Mapping Array Elements:
// • "Prompt the user to input a list of numbers separated by spaces. Implement a function that uses the map HOF to double each number and display the transformed array."
// • Example Input: "1 2 3 4"
// • Expected Output: "[2, 4, 6, 8]"

let str1 = "1 2 3 4";
let arr1 = str1. split(" "); // string to array, but elements are still string

let res1 = arr1.map((el) => el*2);  // string converts to number explicitly
console.log(res1);



// 2. Filtering Data:
// • "Ask the user for a list of integers separated by commas. Create a function that uses the filter HOF to extract even numbers from the input and display them."
// • Example Input: "1, 2, 3, 4, 5"
// • Expected Output: "[2, 4]"

let str2 = "1, 2, 3, 4";
let arr2 = str2.split(",").map(Number)  // Convert all elements to numbers

let res2 = arr2.filter((el) => el % 2 == 0);
console.log((res2));


// 3. Reducing Arrays:
// • "Prompt the user for a series of numbers separated by semicolons. Implement a function that uses the reduce HOF to calculate the sum of the numbers and display the result."
// • Example Input: "5; 10; 15"
// • Expected Output: "30"

let str3 = "5; 10; 15";
let arr3 = str3.split(";").map(Number);
let res3 = arr3.reduce((acc, el) => acc + el);
console.log(res3);

