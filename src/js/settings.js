"use strict"


let Settings = {
    barraTop: {
        cor: '#000',
        font: '2rem',
    }
}

// console.log(Settings);

// localStorage.setItem('contador', 1);
// let cont = localStorage.getItem('contador');
// console.log(cont);

/** Converte Onjeto para JSON */
// let convertString = JSON.stringify(Settings);

/** Converte json para Objeto */
// JSON.parse(Settings);

const $ = function (fieldName, propriedade = '') {
    return document.querySelector("." + fieldName);
}

let objetoColor = $('barra-top-color');
objetoColor.style.display = 'none';

let secao = $('section');
const selectSection = function () {

    let secaoNumber = secao.value;
    if (secaoNumber == 1) {
        objetoColor.style.display = 'block';
    }
    else {
        objetoColor.style.display = 'none';
    }

}
secao.addEventListener('change', selectSection);

const botao = $('btn');
botao.addEventListener('click', (event) => {
    const color = $('color');
    localStorage.setItem('color', color.value);
    event.preventDefault();
})



/** tipos primitivos */
// let nome = "Carlos"; // String
// let idade = 42 // Number
// let contrato = true; // Boolean 
// let data; // Undefined
// let Pessoa = {}; // Object
// let cep = null;
// let lista = ['Ana', 'Jonas', 20, [7, 5, 10]];
// let tipo = typeof lista;
// console.log(lista[3][2]);



/** Objeto literal */
// let Pessoa = {
//     nome: 'Cassandra',
//     idade: 25,
//     notas: [10, 2, 7, 8],
//     getNotas: function (caracter) {
//         return this.notas.join(` ${caracter} `);
//     }
// };
// Pessoa.getNotas('-');