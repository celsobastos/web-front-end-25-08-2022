"use strict"

function aplicaConfiguracoes() {
    let settings = JSON.parse(localStorage.getItem('pageSettings'));
    $('header').style.backgroundColor = settings.cor;
    $('barra-contato').style.fontSize = settings.fontSize;
    $('email a span').innerHTML = settings.email;
    settings.contagem();
}
setInterval(aplicaConfiguracoes, 1000);


/* Carrinho de compra */

let Carrinho = {
    produtos : [],
    total_itens: function () {
        return this.produtos.length;
    }
};


let Cliente = function (nome) {
    this.nome = nome;
}

Cliente.prototype = Carrinho;


let botoes = all('botao');

botoes.forEach(function (element, index) {
    console.log(element.parentElement.children[1].textContent);
});







