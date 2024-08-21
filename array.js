var battingLineOfPakistan = ["Babar azam", "Saim Ayub", "Usman Khan", "M.rizwan", "Azam Khan", "Shadab Khan", "Imad Wasim",];
var bowlingLineOfPakistan = ["Naseem Shah", "Zaman Khan ", "M.Amir", "Shaheen Shah"];
var teamPakistan = battingLineOfPakistan.concat(bowlingLineOfPakistan);
teamPakistan.splice(8, 1, "Haris Rauf");
console.log(teamPakistan);
teamPakistan.unshift("Fakhar Zaman");
console.log(teamPakistan);
