"use strict"

function aplicaConfiguracoes() {
    let settings = JSON.parse(localStorage.getItem('pageSettings'));
    $('header').style.backgroundColor = settings.cor;
    $('barra-contato').style.fontSize = settings.fontSize;
}

setInterval(aplicaConfiguracoes, 1000);