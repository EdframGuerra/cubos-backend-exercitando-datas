const { setDay } = require("date-fns");

const taAberto = (clienteNaloja) => {
    const Aberto = new Date(+clienteNaloja);
    const Fechado = new Date(+clienteNaloja);

    Aberto.setHours(8)
    Fechado.setHours(18, 1);

    return +clienteNaloja >= +Aberto && +clienteNaloja <= Fechado && +clienteNaloja.getDay() >= 1 && +clienteNaloja.getDay() <= 5;

}
console.log(taAberto(new Date(2021, 3, 25, 12)), "hoje é domingo!");
console.log(taAberto(new Date(2021, 3, 26, 12)), "hoje é segunda-feira");
console.log(taAberto(new Date(2021, 3, 26, 7, 59)), 'esta muito cedo, loja fechada (7h59)');