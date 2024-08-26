// Currently studied five array iteration method
// forEach
//.map
//.filter
//.reduce
//.find
var arrOfObj = [
    {
        name: "Muhammad Ahmed Raza",
        age: 17,
        education: "intermediate",
    },
    {
        name: "Mir Muhammad Salman",
        age: 47,
        education: "BSc",
    },
    {
        name: "Shahina Salman",
        age: 44,
        eduaction: "BA",
    },
];
var getAdults = function (val) {
    return val.age > 18;
};
var ansOfObj = arrOfObj.filter(getAdults);
console.log(ansOfObj);
// const price: number[] = [250, 645, 300, 900, 50];
// let cheapestPrice: (prev: number, current: number) => number = (
//   prev,
//   current
// ) => {
//   return prev < current ? prev : current;
// };
// let lowestPrice: number = price.reduce(cheapestPrice);
// console.log(lowestPrice);
