"use strict";
// THERE ARE THREE TYPES OF LOGICAL OPERATOR
// AND &&
// OR ||
// NOT !
Object.defineProperty(exports, "__esModule", { value: true });
var age = 18;
console.log(age >= 18 && age !== 19);
var fullName = "MAhmedk";
var Age = 17;
console.log(fullName != "Ali" && Age !== 16);
var paymentMethod = "via card";
var PaymentMethod = "cash on delivery";
console.log(paymentMethod == PaymentMethod || paymentMethod != PaymentMethod);
console.log(!(fullName != "MAhmedk"));
