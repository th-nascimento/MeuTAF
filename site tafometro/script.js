// 1 - Designar id's do CSS no JavaScript:

let imputOpm = document.getElementById("opm");
let imputGrad = document.getElementById("grad");
let imputIdade = document.getElementById("idade");
let imputNome = document.getElementById("nome");
let imputGenero = document.getElementsByClassName("genero")

let imputCorrida = document.getElementById("corrida");
let imputBarra = document.getElementById("barra");
let imputFlexao = document.getElementById("flexao");
let imputNatacao = document.getElementById("natacao");

let resultado = document.getElementById("resultado");

resultado.innerHTML=`<li>Seu TAF foi bom</li>`

function calcTaf() {return ((this.c + this.f + this.b + this.n)/4);}

var padrao = {
    c: 10,
    b: 10,
    f: 10,
    n: 10,

    resultado: calcTaf,
}

function calcular(){

/*  let opm = imputOpm.value;
    let grad = imputGrad.value;
    let idade = imputIdade.value;
    let nome = imputNome.value;
    let genero = imputGenero.value; */
    
        let corrida = imputCorrida.value;
        let barra = imputBarra.value;
        let flexao = imputFlexao.value;
        let natacao = imputNatacao.value;

    /*     PONTUAÇÃO DA CORRIDA: */
    if (corrida >= 3000){corrida = 10}
    else if (corrida >= 2800){corrida = 9}
    else if (corrida >= 2700){corrida = 8}
    else if (corrida >= 2600){corrida = 7}
    else if (corrida >= 2500){corrida = 6}
    else if (corrida >= 2400){corrida = 5}
    else if (corrida < 2400 && corrida > 0){corrida = 1}
    else {corrida = 0};

/*     PONTUAÇÃO DA BARRA: */
    if (barra >= 12){barra = 10}
    else if (barra >= 11){barra = 9}
    else if (barra >= 10){barra = 8}
    else if (barra >= 8){barra = 7}
    else if (barra >= 7){barra = 6}
    else if (barra >= 6){barra = 5}
    else if (barra < 6 && barra > 0){barra = 1}
    else {barra = 0};

/*     PONTUAÇÃO DA FLEXÃO: */
    if (flexao >= 30){flexao = 10}
    else if (flexao >= 28){flexao = 9}
    else if (flexao >= 26){flexao = 8}
    else if (flexao >= 24){flexao = 7}
    else if (flexao >= 22){flexao = 6}
    else if (flexao >= 20){flexao = 5}
    else if (flexao < 20 && flexao > 0){flexao = 1}
    else {flexao = 0};

/*     PONTUAÇÃO DA NATAÇÃO: */
    if (natacao >= 600){natacao = 10}
    else if (natacao >= 550){natacao = 9}
    else if (natacao >= 500){natacao = 8}
    else if (natacao >= 450){natacao = 7}
    else if (natacao >= 400){natacao = 6}
    else if (natacao >= 350){natacao = 5}
    else if (natacao < 350 && natacao > 0){natacao = 1}
    else {natacao = 0};

/* NESTA PARTE DO CÓDIGO ACONTECE A ALTERAÇÃO DAS PROPRIEDADES DO OBJETO PADRÃO: */    
padrao.c = corrida;
padrao.b = barra;
padrao.f = flexao;
padrao.n = natacao;

console.log("Corrida: " + corrida +
    " / Flexão: " + flexao +
    " / Barra: " + barra +
    " / Natação: " + natacao + 
    " / Pontuação: " + padrao.resultado());



}