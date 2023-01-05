/*1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']*/


function newArray(multiplier, value) {
    let result = []
    for (let i = 0; i < multiplier; i++) {
        result.push(value)
    }
    return result
}


console.log(newArray(3, 'a')) //['a', 'a', 'a']
