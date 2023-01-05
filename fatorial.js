//recebe um numero e imprime seu fatorial

function fatorial(number) {
    if (number < 0) {
        console.log("O número precisa ser positivo!")
    } else {
        let result = 1
    for (let i = number; i >= 1; i--) {
        result = result * i
    }
    return result
    }
}

console.log(fatorial(3)) //6
console.log(fatorial(10)) //3628800
console.log(fatorial(4)) //24