var no_OfVowels = 0;
var vowelCounter = function (text) {
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var val = text_1[_i];
        if (val === "a" ||
            val === "e" ||
            val === "i" ||
            val === "o" ||
            val === "u") {
            no_OfVowels++;
        }
    }
    console.log("The no. of vowels in your text are: ".concat(no_OfVowels));
    return no_OfVowels;
};
vowelCounter("Mir Muhammad salman");
var goatPlayers = ["imran khan", "sachin tendulkar", "pat cummins"];
var mapArr = goatPlayers.map(vowelCounter);
console.log(mapArr);
