function percentage(obtainMarks, totalMarks) {
    return obtainMarks / totalMarks * 100;
}
var result = percentage(324, 550);
console.log(result);
function greet(message) {
    if (message === void 0) { message = "Assalamualaikum"; }
    return message;
}
var greetings = greet();
console.log(greetings);
