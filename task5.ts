let price = [250, 645, 300, 900, 50]
for(let idx=0; idx < 5; idx++){price[idx] = price[idx] - (price[idx] / 10)
}
console.log(price);