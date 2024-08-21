var studentMarks = [85, 97, 44, 37, 76, 60];
var avgOfMarks = 0;
for (var _i = 0, studentMarks_1 = studentMarks; _i < studentMarks_1.length; _i++) {
    var marks = studentMarks_1[_i];
    avgOfMarks += marks;
}
avgOfMarks /= studentMarks.length;
console.log(avgOfMarks);
var itemsPrice = [250, 645, 300, 900, 50];
for (var i = 0; i < itemsPrice.length; i++) {
    itemsPrice[i] = itemsPrice[i] - itemsPrice[i] / 10;
}
console.log(itemsPrice);
var big6 = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
big6.shift();
console.log(big6);
big6.splice(1, 1, "Ola");
console.log(big6);
big6.push("Amazon");
console.log(big6);
