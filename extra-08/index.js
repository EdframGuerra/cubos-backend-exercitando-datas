// Formatando datas
// Faça funções que recebam um Date() como argumento e formate a data, retornando um string como nos exemplos abaixo (uma função para cada letra):
const { format } = require('date-fns')

// a) 05 de outubro de 2020 

const dataA = format(new Date(2020, 9, 5), "dd 'de' MMMM 'de' yyyy");
console.log(dataA);


//b) 05/10/2020
const dataB = format(new Date(2020, 9, 5), "dd/MM/yyyy");
console.log(dataB);


//c) 5 out
const dataC = format(new Date(2020, 9, 5), "dd clearMMM");
console.log(dataC);

//d) 05 out 2020
const dataD = format(new Date(2020, 9, 5), "dd MMM yyyy");
console.log(dataD);

//e) 05 de out de 2020
const dataE = format(new Date(2020, 9, 5), "dd 'de' MMM 'de' yyyy");
console.log(dataE);

//f) 05/out

const dataF = format(new Date(2020, 9, 5), "dd/MMM");
console.log(dataF);
S


