//EJERCICIO A
{const numeros = [5, 10, 15, 20, 25];
const resultado = numeros.map(numero => numero*2);
console.log(resultado);}



//EJERCICIO B

const numeros = [3, 8, 12, 5, 20, 7];
const resultado = numeros.filter(n => n > 10);
console.log(resultado);


//EJERCICIO C
const numeros = [5, 10, 15, 20, 25, 30];
const resultado = numeros
  .filter (n=> n>10)
  .map(n=> n*2);

  console.log(resultado);
