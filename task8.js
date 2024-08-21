var arrOfNum = [];
var arrayMaker = function (val) {
    for (var i = 1; i <= val; i++) {
        arrOfNum.push(i);
    }
};
arrayMaker(5);
console.log(arrOfNum);
var sum = arrOfNum.reduce(function (total, current) {
    return total + current;
});
var product = arrOfNum.reduce(function (total, current) {
    // console.log(`total:${total} and current: ${current} `)
    return total * current;
});
console.log("sum: ".concat(sum));
console.log("product: ".concat(product));
