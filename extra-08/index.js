const { format } = require('date-fns')

const dataA = format(new Date(2020, 9, 5), "dd 'de' MMMM 'de' yyyy");
console.log(dataA);

const dataB = format(new Date(2020, 9, 5), "dd/MM/yyyy");
console.log(dataB);

const dataC = format(new Date(2020, 9, 5), "dd clearMMM");
console.log(dataC);

const dataD = format(new Date(2020, 9, 5), "dd MMM yyyy");
console.log(dataD);

const dataE = format(new Date(2020, 9, 5), "dd 'de' MMM 'de' yyyy");
console.log(dataE);

const dataF = format(new Date(2020, 9, 5), "dd/MMM");
console.log(dataF);