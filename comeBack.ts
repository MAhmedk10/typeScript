let studentMarks :number[] = [85,97,44,37,76,60]
let avgOfMarks : number = 0
for(let marks of studentMarks ){
avgOfMarks += marks
}
avgOfMarks /= studentMarks.length
console.log(avgOfMarks);


let itemsPrice : number[] = [250,645,300,900,50]
for(let i=0; i<itemsPrice.length; i++){
itemsPrice[i]=  itemsPrice[i]- itemsPrice[i]/10
}
console.log(itemsPrice)

let big6 : string[] = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
big6.shift()
console.log(big6)
big6.splice(1,1,"Ola")
console.log(big6)
big6.push("Amazon")
console.log(big6)