// In typescript generic functions are used to maintain the type dynamically of our functions and elements

function generic<K>(param:K): K{
   return(param);
}

const exp1 = generic(10); 
const exp2 = generic("Ahmed")
const exp3 = generic(true)

console.log(exp1)
console.log(exp2)
console.log(exp3)