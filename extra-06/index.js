const promoção = (inicioPromo, solicitouUso) => {
    return +solicitouUso < +(inicioPromo.setHours(inicioPromo.getHours() + 24))
}
const inicioPromo = new Date(2022, 10, 25, 11);
const solicitouUso = new Date(2022, 10, 29, 7);

console.log(promoção(inicioPromo, solicitouUso));