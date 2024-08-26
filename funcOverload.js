function Main(param1, param2) {
    var upperCaseParam = param1.toUpperCase;
    console.log(upperCaseParam);
    return param1 + param2;
}
var overLoad1 = Main(4, 5);
var overLoad2 = Main("Muhammad", "Ahmed");
console.log(overLoad1);
console.log(overLoad2);
