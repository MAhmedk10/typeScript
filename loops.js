// THERE ARE FIVE TYPES OF LOOPS IN JAVASCRIPT.
// 1. for LOOP
// 2. while LOOP
// 3. do while LOOP
// 4. for in LOOP
// 5. for of LOOP
// FOR loop
// for(let i=0;i<= 200; i+= 2){console.log(i)};
// for(let count=0 ; count<= 20; count++){if(count%3 === 0){console.log(count)}};
// for(let i=0; i<= 15; i++){console.log(i= i+3)};
// let totalSum=0;
// for( let i=0; i<= 100; i++){totalSum= totalSum + i};
// console.log(`your sum of 1 to 100 is ${totalSum}`);
// // while LOOP
// {let i = 0;
// while(i<=50){if(i%7 === 0){console.log(i)}
// i++;
// }};
// let sumOf7 = 0
// let i = 0;
// while(i<=40){if(i%8 === 0){console.log(i)}
// i++;};
// do-while LOOP
var num = 5;
do {
    if (num % 5 === 0) {
        console.log(num);
    }
    num++;
} while (num <= 50);
