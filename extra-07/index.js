// Exercício extra 🌟
// Ainda tá valendo a promoção?
// Uma determinada promoção é válida por apenas 30 dias corridos. Faça uma função que recebe dois argumentos, sendo:

// O Date() de início da promoção
// O Date() em que o cliente solicitou o uso desta promoção
// Sua função deve retornar true caso o usuário esteja autorizado a usufruir da promoção, e false caso contrário.


const promoção = (inicioPromo, solicitouUso) => {
    return +solicitouUso < +(inicioPromo.setDate(inicioPromo.getDay() + 30))
}
const inicioPromo = new Date(2022, 10, 25, 11);
const solicitouUso = new Date(2022, 11, 29, 7);

console.log(promoção(inicioPromo, solicitouUso));