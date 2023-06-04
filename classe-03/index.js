const taAberto = (clienteNaloja) => {
    const Aberto = new Date(+clienteNaloja);
    const Fechado = new Date(+clienteNaloja);

    Aberto.setHours(8);
    Fechado.setHours(18, 1);

    return +clienteNaloja >= +Aberto && +clienteNaloja <= Fechado
}

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));