// Golden Rules:
//1. Variable declarations are scanned and are made undefined
//2. Function declarations are scanned and are made available

// Accessing before Intialization



// Before execution there is memory assignment is done,
// due to that variables will have undefined by defualt and function name will have function body in it.

console.log("functionAsVar ", functionAsVar); // It will be undefined
console.log("getNameAsVar ", getNameAsVar); //It will be undefined

console.log(x); // It will be undefined

console.log(getName); //It will be fucntion body

var x = 7;

function getName() {
  console.log("getName");
}

var functionAsVar = () => {
  // function as a varible , so it will be undefined before the interpretor come to this l
  console.log("Hello World");
};

var getNameAsVar = function getName() {
  console.log("getName");
};
