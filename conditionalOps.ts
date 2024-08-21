// THERE ARE THREE TYPES OF CONDITIONAL STATEMENT
// if Statement
// else Statement
// if Else statement

// 1. if STATEMENT ;

// let studentMarks = 73;
// if(studentMarks >= 55){console.log("you are eligible for NED test")};

// // 2. if Else STATEMENT ;

// if(studentMarks <= 55){console.log("you are not eligible for NED test")}
// else {console.log("CONGRATULATIONS! YOU HAVE DONE IT")};

// let num = 25
// if(num%2 === 0 ){console.log(`${num} is even `)}
// else{console.log(`${num} is odd`)};

// 3. else if STATEMENT ;

let Theme = "relaxing";
let wallPaper ;
if(Theme === "sad"){wallPaper = "black"}
else if(Theme === "happy"){wallPaper = "bright"}
else if (Theme === "angry"){wallPaper = "red"}
else if(Theme === "relaxing"){wallPaper = "rainy and cloudy"}
else(wallPaper = "white");
console.log(wallPaper);