// In typescript enum are used to make immutable values which means we can not reassign values to it,but we can assign the values of enum to other variables
var Directions;
(function (Directions) {
    Directions["UP"] = "up";
    Directions["DOWN"] = "down";
    Directions["LEFT"] = "left";
    Directions["RIGHT"] = "right";
})(Directions || (Directions = {}));
//Using enum as type and assigning its value to variables
var bikeDirection = Directions.LEFT;
console.log(bikeDirection); // left
