// Coding Challenge 2: Write a JavaScript function to check if a given number is even or odd.The function should take one parameter, num, and return "Even" if the number is even, and "Odd" if the number is odd.

function check(num)
{
    if (num%2==0)
    {
        return "Even";
    }else
    {
        return "Odd";
    }
}

var num = 99;
console.log(check(num))