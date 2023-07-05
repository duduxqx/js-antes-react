// Nullish Coalescing Operator
/*
const idade = 0;

document.body.innerText = 'Sua idade é : ' + (idade ?? 'Não informado');
*/

// Objetos
/*
const user = {
  name: 'Eduardo',
  age: 27,
  address: {
    street: 'Rua teste',
    number: 176
  },
};

 document.body.innerText = ('name' in user);
 document.body.innerText = Object.keys(user);
 document.body.innerText = JSON.stringify(Object.values(user));
 document.body.innerText = JSON.stringify(Object.entries(user));
*/
// Desestruturação
/*
const { address, age} = user;

document.body.innerText = JSON.stringify({address, age});
*/

// Rest Operator
/*
 const { name, ...rest } = user;

 document.body.innerText = JSON.stringify(rest);

const array = [1,2,3,4,5,6,7,8,9,10];

const [first, second, ...rest] = array;

document.body.innerText = JSON.stringify({first, second, rest});
*/

// Short Syntax
/*

const name = 'Eduardo';
const age = 27;

const user = {
  name,
  age
};

document.body.innerText = JSON.stringify({ name, age })
*/

// Optional Chaining
/*

const app = {
  user: {
    name: 'Eduardo'
  },
};

document.body.innerText = app.user?.name ?? 'Não informado';

*/

// Métodos de Array

/*
MAP


const array = [1,2,3,4,5]

const novoArray = array.map(item => {
  if(item % 2 === 0) {
    return item * 10
  }

  return item
});

document.body.innerText = JSON.stringify(novoArray)

*/
/*
FILTER

const array = [1,2,3,4,5]

const novoArray = array.filter(item => item % 2 === 0);

document.body.innerText = JSON.stringify(novoArray);
*/

/*
EVERY
const array = [1,2,3,4,5]

const todosItensSaoNumeros = array.every(item => {
  return typeof item === 'number';
});

document.body.innerText = JSON.stringify(todosItensSaoNumeros);
*/

/*
SOME
const array = ['dwa', 2];

const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item === 'number';
});

document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero);
*/
/*
FIND

const array = [1,2,3,4,5];

const par = array.find(item => item %2 == 0);

document.body.innerText = JSON.stringify(par);
*/

// Promises

/*
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

somaDoisNumeros(5, 5)
.then(soma => {
  document.body.innerText = soma;
});
*/

document.body.innerText = "Javascript antes de ReactJS";

