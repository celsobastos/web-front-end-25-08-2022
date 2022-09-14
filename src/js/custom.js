"use strict"

function aplicaConfiguracoes() {
    let settings = JSON.parse(localStorage.getItem('pageSettings'));
    $('header').style.backgroundColor = settings.cor;
    $('barra-contato').style.fontSize = settings.fontSize;
    $('email a span').innerHTML = settings.email;
}
setInterval(aplicaConfiguracoes, 1000);


/* Carrinho de compra */
<<<<<<< Updated upstream
let Produto = {
    nome: '',
    valor: '',
    getNome: function () {
        return this.nome;
    },
    getValor: function () {
        let valor = this.valor.replace(/R\$./gi, '');
        return parseFloat(valor);
=======

let Produto = {
    getNome: function() {
        return this.nome;
    },
    getValor: function() {
        return parseFloat(this.valor.replace(/R\$./ig, ''));
>>>>>>> Stashed changes
    }
};

let Importados = function (nome, valor) {
    this.nome = nome;
    this.valor = valor;
<<<<<<< Updated upstream
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
=======
    this.calculo = function () {
        return this.getValor() - this.getValor() * 0.1;
    }
}
Importados.prototype = Produto;

// let test = new Importados('test1', 'R$ 30,00');
// console.log(test.calculo());

// let Nacionais = function (nome, valor) {
//     this.desconto = 0.2;
//     this.calculo = function () {
//         return this.valor * this.desconto;
//     }
// }
// Nacionais.prototype = Produto;

let Carrinho = function() {
    this.produtos = [];
    this.somaTotal = function() {
        let total = 0;
        this.produtos.forEach(function(element) {
            total += element.calculo();
        });
        return total;
    },
    this.countProdutos = function () {
        return this.produtos.length;
    },
    this.produtosAll = function() {
        return this.produtos;
    },
    this.getTotal = function() {
        return this.somaTotal();
    }
}

let carrinho = new Carrinho(); 

let botoes = all('botao');
botoes.forEach(function (element, index) {
    element.addEventListener('click', (event) => {

        let pImportados = new Importados(
            'Diversos',
            element.parentElement.children[1].textContent
        );

        carrinho.produtos.push(pImportados);
        $('carrinho-compra').innerHTML = carrinho.countProdutos();
        
        console.log(carrinho);
    });
});



let bottotal = $('soma-total');
bottotal.addEventListener('click', (event) => {
    console.log(carrinho.getTotal());
});
>>>>>>> Stashed changes


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