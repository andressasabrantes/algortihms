//crie um programa que recebe dois valores e exibe qual é o maior entre eles

function highestNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber
    } else if (firstNumber < secondNumber) {
        return secondNumber
    } else 
        return 'The numbers are equals!'
}

console.log(highestNumber(1,3)) // 3
console.log(highestNumber(3, 1)) // 3
console.log(highestNumber(6, 3)) // 6
console.log(highestNumber(15274125, 1565877)) // 15274125
console.log(highestNumber(123456789, 123456789)) // The numbers are equals!
console.log(highestNumber(54464, 54464)) // The numbers are equals!