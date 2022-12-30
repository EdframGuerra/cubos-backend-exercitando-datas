const taAberto = (clienteNaloja) => {
    const Aberto = new Date(+clienteNaloja);
    const Fechado = new Date(+clienteNaloja);

    Aberto.setHours(8);
    Fechado.setHours(18, 1);

    if (clienteNaloja.getDay() === 6) {
        Fechado.setHours(12);
    }

    return +clienteNaloja >= +Aberto && +clienteNaloja <= Fechado && +clienteNaloja.getDay() >= 1 && +clienteNaloja.getDay() <= 6;

}
console.log(taAberto(new Date(2021, 3, 25, 12)), ' pois é um domingo')
console.log(taAberto(new Date(2021, 3, 26, 19)), ' pois é uma segunda')
console.log(taAberto(new Date(2021, 3, 26, 17, 59)), ' é muito cedo (7h59))')
console.log(taAberto(new Date(2021, 3, 24, 9, 30)), 'é sábado de manhã (9h30)')