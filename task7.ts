// // VOWEL FINDER

 let count = 0;

// function vowelFinder(text: string){
//   for (let i = 0; i < text.length; i++) {
//     if (
//       text[i] === "a" ||
//       text[i] === "e" ||
//       text[i] === "i" ||
//       text[i] === "o" ||
//       text[i] === "u"
//     ) {
//       console.log(text[i]);
//     } 
//   }
//  return console.log(`These are the vowels in your text ${text}`);
// };

// //let myText = vowelFinder("Muhammad");
// console.log(vowelFinder("Muhammad"));








let vowelArray:string[] = []; 

// VOWEL COUNTER
function vowelCounter(text: string) {
    for (let i = 0; i < text.length; i++) {
      if (
        text[i] === "a" ||
        text[i] === "e" ||
        text[i] === "i" ||
        text[i] === "o" ||
        text[i] === "u"
      ) {
        count++
        vowelArray.push(text[i])
      } 
    }
    console.log(`The number of vowels in your text are: ${count}`);
    return vowelArray
  };
  
  //let myName = vowelCounter("Umar");
  console.log(vowelCounter("Muhamad ahmed raza"));







//   // BY ARROW FUNCTION METHOD


//   let vfind = (text:string) => {
//     for (let i = 0; i < text.length; i++) {
//         if (
//           text[i] === "a" ||
//           text[i] === "e" ||
//           text[i] === "i" ||
//           text[i] === "o" ||
//           text[i] === "u"
//         ) {
//           console.log(text[i]);
//         } 
//       }
//   }
//   console.log(vfind("salam"))