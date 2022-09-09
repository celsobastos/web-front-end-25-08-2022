"use strict"

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