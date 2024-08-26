function Main(param1:number,param2:number):number
function Main(param1:string,param2:string):string

function Main(param1:any,param2:any):any{
    return param1 + param2
}


let overLoad1 = Main(4,5)
let overLoad2 = Main("Muhammad","Ahmed")

console.log(overLoad1)
console.log(overLoad2)
