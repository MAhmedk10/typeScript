let no_OfVowels = 0;
let vowelCounter = (text:string) => {
    for(let val of text){
        if(val === "a" ||
        val === "e" ||
        val === "i" ||
        val === "o" ||
        val === "u")
        {no_OfVowels++}
    }
    console.log(`The no. of vowels in your text are: ${no_OfVowels}`)
    return no_OfVowels
}
vowelCounter("Mir Muhammad salman");


let goatPlayers : string[] = ["imran khan","sachin tendulkar", "pat cummins"]
let mapArr: number[] = goatPlayers.map(vowelCounter)
console.log(mapArr)