
// --------- C A L L   B A C K   F U N C T I O N ---------

// FUNCTION STATEMENT
function a(){
    console.log("Hi");
}

a();


// FUNCTION EXPRESSION // Ananomous Function
let b = function(){
    console.log("Hello");
}

b();


// ARROW FUNCTION
let c = () =>{
    console.log("Namaste");
}

c();


// IIFE -- Immdeiatelt Invoked Function Expression
(()=>{
        console.log("Atul");
})();

// OR

(function(){
    console.log("Raman");
})();



// call back function -- when a function is called from inside of another function then the called function is called call back function; and the calling function is called HOF (higher order function)

//HOF // when a function accepts function as an argument  or returns a function then it is called HOF
function washClothes(name, count, cb) {  // cb==ironClothes
    console.log(`${name}'s ${count} clothes are washed`);
    cb(name,count); // we can pass value as well inside call back
}

// CB function 
function ironClothes(name,count){
    console.log(`${name}'s ${count} clothes are ironed as well`);

}


washClothes("Atul", 20, ironClothes) // passing function as parameter, do not invoke here
