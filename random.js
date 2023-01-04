//Escreva um programa que, ao iniciar gera um valor aleatório
//de 1 a 10 e permite que o usuario chute um numero até que o valor
//aleatório gerado no inicio do programa seja chutado corretamente.
//o programa deve informar caso o chute tenha sido acima, abaixo ou igual
//ao valor aleatório gerado no inicio do programa.

function getRandom(guess) {
    randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber < guess) {
        return 'Seu chute está acima do número correto!'
    } else if (randomNumber > guess) {
        return 'Seu chute até abaixo do número!'
    } else 
        return 'Parabéns! Você acertou em cheio!'
    
 }

console.log(getRandom(5))
console.log(getRandom(6))
console.log(getRandom(4))
console.log(getRandom(3))
console.log(getRandom(8))
console.log(getRandom(5))
console.log(getRandom(1))
console.log(getRandom(2))
console.log(getRandom(10))
console.log(getRandom(7))