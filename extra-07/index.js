const promoção = (inicioPromo, solicitouUso) => {
    return +solicitouUso < +(inicioPromo.setDate(inicioPromo.getDay() + 30))
}
const inicioPromo = new Date(2022, 10, 25, 11);
const solicitouUso = new Date(2022, 11, 29, 7);

console.log(promoção(inicioPromo, solicitouUso));