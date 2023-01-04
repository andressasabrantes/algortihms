//Dada uma coleção de dados 'idades' [15,46,75,34,23]. imprima na tela a soma destes valores

function simpleSum(array) {
    let result = 0 
    for (let i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}
console.log(simpleSum([15,46,75,34,23]))
console.log(simpleSum([100,100,100,100,100]))
console.log(simpleSum([1567, 15681, 168, 154,2]))
console.log(simpleSum([1, 2, 3, 4, 5])) //15 
console.log(simpleSum([1, 2, 3, 4, 5, 6])) //21 