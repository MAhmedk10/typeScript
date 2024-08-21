// there are twoTyes of unary operators
let num1 = 26;
let num2  = 8;
num1++;  // increment operator
console.log(num1);
num2--; // decrement operator
console.log(num2)



//THERE ARE TWO TYPES OF INCREMENT OPERATOR
let k = 10
console.log(k++); // post increment
console.log(k);
console.log(++k); // pre increment

// SIMILARILY THERE ARE TWO TYPES OF DECREMENT OPERATOR
console.log(k--); // post decrement
console.log(k);
console.log(--k); // pre decrement
export{};

// ASSIGMENT QUES.
let a = 5;
let b = 2;
let c = ++a + a++ + --b + b-- + a + b++ + b; // 6 + 6 + 1 + 1 + 6 + 1 + 1 = 22
console.log(c);
