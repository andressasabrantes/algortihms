//3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, 0, null).
//Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2];

function cleanArray(item) {
    
    let result = []

    for (let i = 0; i < item.length; i++) {
        if (item[i] !== '' && item[i] !== undefined && item[i] !== false && item[i] !== 0 && item[i] !== null)

        result.push(item[i])
    }

    return result
}

console.log(cleanArray([1, 2, 3, '', undefined])); // [1, 2]
console.log(cleanArray([1, 8, 7, true, '', false])) // [1, 8, 7, true]
console.log(cleanArray([1, 2, "a", false, 0, null, 26])); // [1, 2, "a", 26]
console.log(cleanArray([3, 3, 4, "Andressa", false, true])); // [3, 3, 4, "Andressa", true]