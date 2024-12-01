// Coding Challenge 3: Write a JavaScript function that takes an array of numbers and returns the sum of all the numbers in the array.The function should take one parameter, numbers, which is an array of numbers, and return the calculated sum.


function arraySum(numbers)
{
    var sum=0
    for( var i=0;i<numbers.length;i++)
    {
        sum+=numbers[i]
    }

    return sum;
}

var arr=[1,2,3,4,5];
console.log(arraySum(arr))
