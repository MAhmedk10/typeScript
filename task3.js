//for(let i=1; i<=100; i++){if(i%2 === 0){console.log(i)}};// print even number 1 to 100
// for (var num = 1; num < 100; num++) {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
//     ;
// }


let gameNum=26
let num= prompt("guess a number")
if(num<gameNum){console.log("your number is smaller than the correct one")}
else if(num === gameNum - 1){console.log("you are too close!")}
else if(num === gameNum + 1){console.log("you are too close!")}
else if(num > gameNum){console.log("your number is greater than the correct one")}
else {console.log("CONGRATULATIONS! you guessed it")};