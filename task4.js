var marks = [85, 97, 44, 37, 76, 60];
// let totalMarks = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5]
// let avgMarks = (` the average marks per students in a subject is = ${totalMarks / marks.length}`)
// console.log(avgMarks);
var sum = 0;
for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
    var mark = marks_1[_i];
    sum = sum + mark;
}
;
console.log(sum);
