const { format } = require("date-fns");
const { utcToZonedTime } = require("date-fns-tz");

const agora = new Date();

const ceiaDeNatal = new Date(2020, 11, 24, 21, 30);

console.log(`Momento atual: ${agora}`);
console.log(`Ceia de natal 2020: ${ceiaDeNatal}`);
console.log(`Ceia de natal 2020 em timestamp: ${+ceiaDeNatal}`);

const data = new Date(+ceiaDeNatal);
const timeZoned = 'America/Bahia'
const zoneDate = utcToZonedTime(data, timeZoned);

const pattern = 'dd/MM/yyyy T HH:mm:ss\'GMT\'xxx(z)';
const output = format(zoneDate, pattern, { timeZoned: 'America/Bahia' })
console.log(`Ceia de natal 2020 em fuso local: ${output}`);