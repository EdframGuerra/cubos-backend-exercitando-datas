// Uma determinada loja funciona das 8h00 (já aberto) às 18h (ainda aberto, fechado as 18h01). Faça uma função que recebe como argumento um objeto Date do JS, representando o momento em que o cliente chega na loja. Sua função deverá retornar true caso a loja esteja aberta e false caso a loja esteja fechada.

// Pode considerar o fuso UTC para tudo.
// taAberto(newDate(221,1,12)); // deve retornar true
// taAberto(newDate(221,1,2)); // deve retornar false

const taAberto = (clienteNaloja) => {
    const Aberto = new Date(+clienteNaloja);
    const Fechado = new Date(+clienteNaloja);

    Aberto.setHours(8);
    Fechado.setHours(18, 1);

    return +clienteNaloja >= +Aberto && +clienteNaloja <= Fechado
}

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));