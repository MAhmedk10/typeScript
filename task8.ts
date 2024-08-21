let arrOfNum:number[]= []

const arrayMaker = (val) => {
for(let i=1; i <= val; i++){
arrOfNum.push(i)
}}
arrayMaker(5)
console.log(arrOfNum)
let sum = arrOfNum.reduce((total,current) => {

 return total + current
})

let product = arrOfNum.reduce((total,current,) => {
  // console.log(`total:${total} and current: ${current} `)
    return total * current
   })

   console.log(`sum: ${sum}`)
   console.log(`product: ${product}`)
