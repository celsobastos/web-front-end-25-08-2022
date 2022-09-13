"use strict"

function aplicaConfiguracoes() {
    let settings = JSON.parse(localStorage.getItem('pageSettings'));
    $('header').style.backgroundColor = settings.cor;
    $('barra-contato').style.fontSize = settings.fontSize;
    $('email a span').innerHTML = settings.email;
}

setInterval(aplicaConfiguracoes, 1000);

// setTimeout(aplicaConfiguracoes, 1000);