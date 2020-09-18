// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The variable internal is function scoped, that being said when nested function is looking to console.log internal, it will first look within its scope, if it does not find internal in its scope, it will then look in the outer next scope, in this case it is myFunction that holds tha variable internal, that is why nestedFunction can access internal

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (num) {
  return (num * (num + 1))/2;
}

console.log(summation(4));