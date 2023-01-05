// usuario passa um numero, de 1 a 10, e deve continuar passando até acertar o número 
// randomicamente escolhido pelo programa
// function - Math.floor(Math.random() * 10)

function randomKick(myGuess) {

    programKick = Math.floor(Math.random() * 10)
    if (myGuess < programKick) {
        return ("O número era " + programKick + " E você chutou abaixo!")
    } else if (myGuess > programKick) {
        return ("O número era " + programKick + " O seu chute foi acima!")
    } else if (myGuess === programKick) {
        return ("O número era " + programKick + " Parabéns!! Você acertou em cheio!!")
    }

}

console.log(randomKick(3)) //
console.log(randomKick(9)) //
console.log(randomKick(10)) //
