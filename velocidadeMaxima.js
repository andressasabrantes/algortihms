//velocidade maxima - entrada do usuario
// <= velocidade maxima - nao houve multa
//10km acima - multa leve
//11km -- 20km - multa grave
//acima 20km da velocidade maxima - multa gravissima

function velocidadeMaxima(minhaVelocidade) {

    const velocidadeMaxima = 80

    if (minhaVelocidade <= velocidadeMaxima) {
        return("Sua velocidade foi de: " + minhaVelocidade + "km/h" + " Não exitem multas")
    } else if (minhaVelocidade <= (velocidadeMaxima + 10)) {
        return("Sua velocidade foi de: " + minhaVelocidade + "km/h" + " Você tem uma multa Leve")
    } else if (minhaVelocidade >= (velocidadeMaxima + 11) && minhaVelocidade <= (velocidadeMaxima + 20)) {
        return("Sua velocidade foi de: " + minhaVelocidade + "km/h" + " Você tem uma multa Grave")
    } else if (minhaVelocidade >= (velocidadeMaxima + 20)) {
        return("Sua velocidade foi de: " + minhaVelocidade + "km/h" + " Você tem uma multa Gravíssima")
    }

}

console.log(velocidadeMaxima(78)) //Fique tranquilo, você não foi multado!
console.log(velocidadeMaxima(81)) //Você tem uma multa. Tipo da multa: Leve
console.log(velocidadeMaxima(95)) //Você tem uma multa. Tipo da multa: Grave
console.log(velocidadeMaxima(110)) //Você tem uma multa. Tipo da multa: Gravíssima