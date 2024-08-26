// In typescript enum are used to make immutable values which means we can not reassign values to it,but we can assign the values of enum to other variables

enum Directions{
    UP="up",
    DOWN="down",
    LEFT="left",
    RIGHT="right"
}

//Using enum as type and assigning its value to variables

let bikeDirection: Directions = Directions.LEFT
console.log(bikeDirection);// left