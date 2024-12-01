const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];


function combiningArrays(fruits,vegetables)
{
    let combinedArray = [...fruits,...vegetables];

    return combinedArray;
}
console.log(combiningArrays(fruits, vegetables)); 
