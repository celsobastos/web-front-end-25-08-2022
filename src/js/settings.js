"use strict"

let objetoColor = $('barra-top');
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
    const color = $('color').value;
    const fontSize = $('font-size').innerHTML;
    
    const dataBarraTop = {};
    dataBarraTop.cor = color;
    dataBarraTop.fontSize = fontSize + 'rem';

    const dataJson = JSON.stringify(dataBarraTop);
    
    localStorage.setItem('pageSettings', dataJson);
    event.preventDefault();
})

// console.log(Settings);

// localStorage.setItem('contador', 1);
// let cont = localStorage.getItem('contador');
// console.log(cont);

/** Converte Onjeto para JSON */
// let convertString = JSON.stringify(Settings);

/** Converte json para Objeto */
// JSON.parse(Settings);


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