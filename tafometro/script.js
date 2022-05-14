let result = document.getElementById("result")

/* result.innerHTML="<p>A partir daqui o Java Script será integrado ao projeto.</p>" */

// Foi definido o parametro máximo da pontuação do gênero MASCULINO:
var padraoM = {
    c: 100 ,
    b: 100,
    f: 100,
    abd: 100,
}

// Foram definidos os parametros de conversão dos resultados em relação a idade do gênero MASCULINO:

                    // DE 18 A 20 ANOS DE IDADE:
                    function taf20() {

                        // Classificação da CORRIDA:
                        if (document.querySelector('input[id="corrida"]').value >= 3000){
                            this.corrida = 100;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2900){
                            this.corrida = 90;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2800){
                            this.corrida = 80;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2700){
                            this.corrida = 70;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2600){
                            this.corrida = 60;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2500){
                            this.corrida = 50;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2400){
                            this.corrida = 40;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2300){
                            this.corrida = 30;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2200){
                            this.corrida = 20;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= 2100){
                            this.corrida = 10;
                        }
                        else{
                            this.corrida = 0;
                        }
                        
                        // Classificação da BARRA:
                        
                        if (document.querySelector('input[id="barra"]').value >= 11){
                            this.barra = 100;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 10){
                            this.barra = 90;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 9){
                            this.barra = 80;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 8){
                            this.barra = 70;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 7){
                            this.barra = 60;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 6){
                            this.barra = 50;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 5){
                            this.barra = 40;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 4){
                            this.barra = 30;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 3){
                            this.barra = 20;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= 2){
                            this.barra = 10;
                        }
                        else{
                            this.barra = 0;
                        }
                        
                        // Classificação da FLEXÃO:
                        
                        if (document.querySelector('input[id="flexao"]').value >= 34){
                            this.flexao = 100;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 32){
                            this.flexao = 90;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 30){
                            this.flexao = 80;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 28){
                            this.flexao = 70;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 26){
                            this.flexao = 60;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 24){
                            this.flexao = 50;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 22){
                            this.flexao = 40;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 20){
                            this.flexao = 30;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 18){
                            this.flexao = 20;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= 16){
                            this.flexao = 10;
                        }
                        else{
                            this.flexao = 0;
                        }
                        
                        // Classificação da ABDOMINAL:
                        
                        if (document.querySelector('input[id="abdominal"]').value >= 46){
                            this.abdominal = 100;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 44){
                            this.abdominal = 90;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 42){
                            this.abdominal = 80;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 40){
                            this.abdominal = 70;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 38){
                            this.abdominal = 60;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 36){
                            this.abdominal = 50;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 34){
                            this.abdominal = 40;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 32){
                            this.abdominal = 30;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 30){
                            this.abdominal = 20;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= 28){
                            this.abdominal = 10;
                        }
                        else{
                            this.abdominal = 0;
                        }
                        
                        padraoM.c = corrida;
                        padraoM.b = barra;
                        padraoM.f = flexao;
                        padraoM.abd = abdominal;

                        console.log(padraoM);
                        
                        }

// Aqui se encontra a FUNÇÃO SELETORA DE GÊNERO:
function seletorM() {

    if ((document.querySelector('input[id="idade"]').value) <= 20){
        return taf20();
    }
    else{
        console.log("SELECTOR FUNCTION ERROR");
    }
}

// Aqui se encontra a FUNÇÃO CLASSIFICADORA DO TAF:
function classificator() {

    if ((document.querySelector('input[name="genero"]:checked').value) == "M"/*  && (document.querySelector('input[id="idade"]').value) <= 20 */){
        return (seletorM());
    }

    else {
        padraoM.c = "RUN PARAMETER ERROR";
        padraoM.b = "PULL UP PARAMETER ERROR";
        padraoM.f = "PUSH UP PARAMETER ERROR";
        padraoM.abd = "ABDOMINAL PARAMETER ERROR";

        console.log(padraoM);
    }
}
