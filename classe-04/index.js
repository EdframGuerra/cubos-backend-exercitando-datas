// Uma determinada loja funciona das 8h00 (já aberto) as 18h (ainda aberto, fechado as 18h01), mas somente de segunda a sexta. Faça uma função que recebe como argumento um objeto Date do JS, representando o momento em que o cliente chega na loja. Sua função deverá retornar true caso a loja esteja aberta e false caso a loja esteja fechada.

const { setDay } = require("date-fns");

// Pode considerar o fuso UTC para tudo.

// taAberto(newDate(2021,3,25,12)); // deve retornar false, pois é um domingo

// taAberto(newDate(2021,3,26,12)); // deve retornar true, pois é uma segunda

// taAberto(newDate(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)

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