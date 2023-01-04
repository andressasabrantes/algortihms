//crie um programa que recebe um número e imprime seu fatorial

function factorial(factorialNumber) {

    let result = 1
    for (let i = factorialNumber; i >= 1; i--) {
        result = result * i
    }
    return result
}

console.log(factorial(4))//24
console.log(factorial(3))//6
console.log(factorial(10))//3628800