// THE STRING METHODS ARE FUNCTIONALITY OF STRING DATA TYPE
var fullName = "MAhmedRaza";
// "STRING LENGTH" MEANS THE NUMBER OF CHARACTERS IN A STRING:    str.length
console.log(fullName.length);
// "STRING INDEX/INDICES" ARE THE ADDRESS OF CHARACTERS IN A STRING: str[0],str[1],str[2]
console.log(fullName[4]);
// str.toUpperCase(); is used to make all thee characters capital
console.log(fullName.toUpperCase());
// str.toLowerCase(); is used to make all the characters small
console.log(fullName.toLowerCase());
// str.trim(); is used to remove spaces from left and right in a string variable
// str.slice(start, end?); used to return that part of string variables that are in paranthesis{ending value is non-inclusive}
console.log(fullName.slice(4, 8));
// str.replace("currentVal", "newVal"); is used to replace a value/character in a string with new value{str.replaceall}
var fvrtName = fullName.replace("Raza", "K10");
console.log(fvrtName);
// str.charAt(index); is used to find a character in a string at given index
