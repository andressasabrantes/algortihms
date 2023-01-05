//10) Implemente um método que encontre os valores comuns entre dois arrays.
//Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]


function commonValue(array1,array2) {

    let result = []

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array1[i])
            }
        }
    }
    return result
}
console.log(commonValue([6, 8], [8, 9]))//[8]
console.log(commonValue([11, 52], [10, 11]))//[11]
console.log(commonValue([11, 52], [10, 11, 52]))//[11, 52]