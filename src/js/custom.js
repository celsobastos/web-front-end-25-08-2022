"use strict"

function aplicaConfiguracoes() {
    let settings = JSON.parse(localStorage.getItem('pageSettings'));
    $('header').style.backgroundColor = settings.cor;
    $('barra-contato').style.fontSize = settings.fontSize;
    $('email a span').innerHTML = settings.email;
}
setInterval(aplicaConfiguracoes, 1000);


/* Carrinho de compra */
let Produto = {
    nome: '',
    valor: '',
    getNome: function () {
        return this.nome;
    },
    getValor: function () {
        let valor = this.valor.replace(/R\$./gi, '');
        return parseFloat(valor);
    }
};

let Importados = function (nome, valor) {
    this.nome = nome;
    this.valor = valor;
    this.calculoDeDesconto = function () {
        return this.getValor() - this.getValor() * 0.2;
    }
}

let Nacionais = function (nome, valor) {
    this.nome = nome;
    this.valor = valor;
    this.calculoDeDesconto = function () {
        return this.getValor() - this.getValor() * 0.8;
    }
}

Nacionais.prototype = Produto;
Importados.prototype = Produto;


// let produto1 = new Importados('Luminaria', 'R$ 50,15');
// console.log(produto1.calculoDeDesconto());

let Carrinho = function() {
    this.produtos = [];
    this.somaTotal = function () {
        let total = 0;
        this.produtos.forEach(function(element) {
            total += element.calculoDeDesconto();
        });
        return total;
    };
    this.contarProdutos = function () {
        return this.produtos.length;
    };
    this.getTotal = function () {
        return this.somaTotal();
    }
}

let carrinho = new Carrinho();

let botaoComprar = all('botao');
botaoComprar.forEach(function (botao) {
    botao.addEventListener('click', function() {
        let importados = new Importados(
            'Diversos',
            botao.parentElement.lastElementChild.textContent
        );
        carrinho.produtos.push(importados);
        $('carrinho').innerHTML = carrinho.contarProdutos();

        //console.log(carrinho.contarProdutos());
    });
});

$('carrinho').addEventListener('click', function () {
    let total = carrinho.getTotal();
    alert(`Total da compra: ${total}`);
})