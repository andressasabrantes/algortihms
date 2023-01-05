//some os valores da lista

function sumValues(values){

    let result = 0
    for (let i = 0; i < values.length; i++) {
        result = values[i] + result 
    }
    return result
}

console.log(sumValues([15,46,75,34,23]))//193
console.log(sumValues([20,20]))//40
console.log(sumValues([88,64,15,54]))//221
