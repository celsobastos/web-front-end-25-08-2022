"use strict"

let settings = JSON.parse(localStorage.getItem('pageSettings'));
document.querySelector('.header').style.backgroundColor = settings.cor;
document.querySelector('.barra-contato').style.fontSize = settings.fontSize;
