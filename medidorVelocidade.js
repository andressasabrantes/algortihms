//velocidade maxima - entrada do usuario
// <= velocidade maxima - nao houve multa
//10km acima - multa leve
//11km -- 20km - multa grave
// > velocidade maxima - multa gravissima

function medidorVelocidade(velocidadeRegistrada) {
    const velocidade = 80
    if (velocidadeRegistrada <= velocidade) {
        return ('Não houve multa! Você estava à ' + velocidadeRegistrada + 'km/h')
    } else if (velocidadeRegistrada === velocidade + 10) {
        return ('Multa leve! Você estava à ' + velocidadeRegistrada + 'km/h')
    } else if ((velocidadeRegistrada === velocidade + 11) && (velocidadeRegistrada <= velocidade + 20)) {
        return ('Multa grave! Você estava à ' + velocidadeRegistrada + 'km/h')
    } else if (velocidadeRegistrada >= velocidade + 20) {
        return ('Multa gravissima! Você estava à ' + velocidadeRegistrada + 'km/h')
    }

}
console.log(medidorVelocidade(80))//Não houve multa! Você estava à 80km/h
console.log(medidorVelocidade(91))//Multa grave! Você estava à 91km/h
console.log(medidorVelocidade(110))//Multa gravissima! Você estava à 110km/h
console.log(medidorVelocidade(150))//Multa gravissima! Você estava à 150km/h
console.log(medidorVelocidade(90))//Multa leve! Você estava à 90km/h