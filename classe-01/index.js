// Faça um programa que cria uma nova data armazenando o momento atual numa variável.

const { format } = require("date-fns");
const { utcToZonedTime } = require("date-fns-tz");

const agora = new Date();

// Na sequência, crie uma data que guarda o momento da ceia de natal de 2020. Suponha que a ceia é as 21h30 no seu fuso horário.

const ceiaDeNatal = new Date(2020, 11, 24, 21, 30);

console.log(`Momento atual: ${agora}`);
console.log(`Ceia de natal 2020: ${ceiaDeNatal}`);
console.log(`Ceia de natal 2020 em timestamp: ${+ceiaDeNatal}`);


// exibição em fuso local utilizando metodos de conversao de fuso horario e timestemp como parametro

const data = new Date(+ceiaDeNatal);
const timeZoned = 'America/Bahia'
const zoneDate = utcToZonedTime(data, timeZoned);

const pattern = 'dd/MM/yyyy T HH:mm:ss\'GMT\'xxx(z)';
const output = format(zoneDate, pattern, { timeZoned: 'America/Bahia' })
console.log(`Ceia de natal 2020 em fuso local: ${output}`);