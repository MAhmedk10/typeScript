function percentage(obtainMarks:number,totalMarks:number){

return obtainMarks / totalMarks * 100;
}

let result= percentage(324, 550)
console.log(result)

function greet(message = "Assalamualaikum"){
    return message;
} 
let greetings = greet()
console.log(greetings)