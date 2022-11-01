//Temparol Zone , Time from intial assignement of variable to undefined by the complier till the time a value is assigned to it explicity is called temporal zone.


// From Line No 1 to Line No8  , the variable "a" has its Temporal Zone , Because when we log it before it it will throw error (  Cannot access 'a' before initialization ), 
//It behavior is diffrent from  var beacuse var has comes in globlal scope and let comes in script scope.

//let and const both follow temporal Death Zone


// Use let and const 

console.log(a);

let a=100;
var b=200;

console.log(a);
console.log(b);
