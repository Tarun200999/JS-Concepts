// Closure :Function bundled with its lexical environment is known as a closure.
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. 
// Its not just that function alone it returns but the entire closure and that's where it becomes interesting

// Example 1 

function x() {
  var a = 10;

  function y() {
    return ++a;
  }

  return y;
}

let a = x();

console.log(a());
console.log(a());
console.log(a());
console.log(a());

console.log("Ended");


// Example 2

function z() {
  var a = 100;
  function x() {
    var a = 100;
    function y() {
      console.log(a, a);
    }
    y();
  }
  x();
}
z();
