// In typescript generic functions are used to maintain the type dynamically of our functions and elements
function generic(param) {
    return (param);
}
var exp1 = generic(10);
var exp2 = generic("Ahmed");
var exp3 = generic(true);
console.log(exp1);
console.log(exp2);
console.log(exp3);
