let result = document.getElementById("result")

/* result.innerHTML="<p>A partir daqui o Java Script será integrado ao projeto.</p>" */

// Foi definido o parâmetro máximo da pontuação:
var padrao = {
    c: 100 ,
    b: 100,
    f: 100,
    abd: 100,
}

var parametroTaf = {
    runPadrao: "",
    pullUpPadrao: "",
    pushUpPadrao: "",
    abPadrao: "", 
}

// Foram definidos os parametros de conversão dos resultados em relação a idade do gênero MASCULINO:

                    // DE 18 A 20 ANOS DE IDADE:

                    function tafM() {
                                                
                        // Classificação da CORRIDA:
                        var run = 100;
                        var runRest = [
                            parametroTaf.runPadrao,
                            parametroTaf.runPadrao-run,
                            parametroTaf.runPadrao-run*2,
                            parametroTaf.runPadrao-run*3,
                            parametroTaf.runPadrao-run*4,
                            parametroTaf.runPadrao-run*5,
                            parametroTaf.runPadrao-run*6,
                            parametroTaf.runPadrao-run*7,
                            parametroTaf.runPadrao-run*8,
                            parametroTaf.runPadrao-run*9,
                        ]

                        if (document.querySelector('input[id="corrida"]').value >= runRest[0]){
                            this.corrida = 100;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[1]){
                            this.corrida = 90;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[2]){
                            this.corrida = 80;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[3]){
                            this.corrida = 70;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[4]){
                            this.corrida = 60;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[5]){
                            this.corrida = 50;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[6]){
                            this.corrida = 40;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[7]){
                            this.corrida = 30;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[8]){
                            this.corrida = 20;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[9]){
                            this.corrida = 10;
                        }
                        else{
                            this.corrida = 0;
                        }
                        
                        // Classificação da BARRA:
                        let pullUp = 1;
                        let pullUpRest = [
                            parametroTaf.pullUpPadrao,
                            parametroTaf.pullUpPadrao-pullUp,
                            parametroTaf.pullUpPadrao-pullUp*2,
                            parametroTaf.pullUpPadrao-pullUp*3,
                            parametroTaf.pullUpPadrao-pullUp*4,
                            parametroTaf.pullUpPadrao-pullUp*5,
                            parametroTaf.pullUpPadrao-pullUp*6,
                            parametroTaf.pullUpPadrao-pullUp*7,
                            parametroTaf.pullUpPadrao-pullUp*8,
                            parametroTaf.pullUpPadrao-pullUp*9,
                        ]

                        if (document.querySelector('input[id="barra"]').value >= pullUpRest[0]){
                            this.barra = 100;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[1]){
                            this.barra = 90;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[2]){
                            this.barra = 80;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[3]){
                            this.barra = 70;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[4]){
                            this.barra = 60;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[5]){
                            this.barra = 50;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[6]){
                            this.barra = 40;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[7]){
                            this.barra = 30;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[8]){
                            this.barra = 20;
                        }
                        else if (document.querySelector('input[id="barra"]').value >= pullUpRest[9]){
                            this.barra = 10;
                        }
                        else{
                            this.barra = 0;
                        }
                        
                        // Classificação da FLEXÃO:
                        let pushUp = 2;
                        let pushUpRest = [
                            parametroTaf.pushUpPadrao,
                            parametroTaf.pushUpPadrao-pushUp,
                            parametroTaf.pushUpPadrao-pushUp*2,
                            parametroTaf.pushUpPadrao-pushUp*3,
                            parametroTaf.pushUpPadrao-pushUp*4,
                            parametroTaf.pushUpPadrao-pushUp*5,
                            parametroTaf.pushUpPadrao-pushUp*6,
                            parametroTaf.pushUpPadrao-pushUp*7,
                            parametroTaf.pushUpPadrao-pushUp*8,
                            parametroTaf.pushUpPadrao-pushUp*9,
                        ]
                        
                        if (document.querySelector('input[id="flexao"]').value >= pushUpRest[0]){
                            this.flexao = 100;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[1]){
                            this.flexao = 90;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[2]){
                            this.flexao = 80;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[3]){
                            this.flexao = 70;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[4]){
                            this.flexao = 60;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[5]){
                            this.flexao = 50;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[6]){
                            this.flexao = 40;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[7]){
                            this.flexao = 30;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[8]){
                            this.flexao = 20;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[9]){
                            this.flexao = 10;
                        }
                        else{
                            this.flexao = 0;
                        }
                        
                        // Classificação da ABDOMINAL:
                        let ab = 2;
                        let abRest = [
                            parametroTaf.abPadrao,
                            parametroTaf.abPadrao-ab,
                            parametroTaf.abPadrao-ab*2,
                            parametroTaf.abPadrao-ab*3,
                            parametroTaf.abPadrao-ab*4,
                            parametroTaf.abPadrao-ab*5,
                            parametroTaf.abPadrao-ab*6,
                            parametroTaf.abPadrao-ab*7,
                            parametroTaf.abPadrao-ab*8,
                            parametroTaf.abPadrao-ab*9,
                        ]
                        
                        if (document.querySelector('input[id="abdominal"]').value >= abRest[0]){
                            this.abdominal = 100;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[1]){
                            this.abdominal = 90;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[2]){
                            this.abdominal = 80;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[3]){
                            this.abdominal = 70;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[4]){
                            this.abdominal = 60;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[5]){
                            this.abdominal = 50;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[6]){
                            this.abdominal = 40;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[7]){
                            this.abdominal = 30;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[8]){
                            this.abdominal = 20;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[9]){
                            this.abdominal = 10;
                        }
                        else{
                            this.abdominal = 0;
                        }
                        
                        padrao.c = corrida;
                        padrao.b = barra;
                        padrao.f = flexao;
                        padrao.abd = abdominal;

                        console.log(padrao);
                        }

// Foram definidos os parametros de conversão dos resultados em relação a idade do gênero FEMININO:

                    // DE 18 A 20 ANOS DE IDADE:
                    function tafF() {

                        // Classificação da CORRIDA:
                        let run = 100;
                        let runRest = [
                            parametroTaf.runPadrao,
                            parametroTaf.runPadrao-run,
                            parametroTaf.runPadrao-run*2,
                            parametroTaf.runPadrao-run*3,
                            parametroTaf.runPadrao-run*4,
                            parametroTaf.runPadrao-run*5,
                            parametroTaf.runPadrao-run*6,
                            parametroTaf.runPadrao-run*7,
                            parametroTaf.runPadrao-run*8,
                            parametroTaf.runPadrao-run*9,
                        ]

                        if (document.querySelector('input[id="corrida"]').value >= runRest[0]){
                            this.corrida = 100;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[1]){
                            this.corrida = 90;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[2]){
                            this.corrida = 80;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[3]){
                            this.corrida = 70;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[4]){
                            this.corrida = 60;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[5]){
                            this.corrida = 50;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[6]){
                            this.corrida = 40;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[7]){
                            this.corrida = 30;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[8]){
                            this.corrida = 20;
                        }
                        else if (document.querySelector('input[id="corrida"]').value >= runRest[9]){
                            this.corrida = 10;
                        }
                        else{
                            this.corrida = 0;
                        }
                                                
                        // Classificação da FLEXÃO:
                        let pushUp = 2;
                        let pushUpRest = [
                            parametroTaf.pushUpPadrao,
                            parametroTaf.pushUpPadrao-pushUp,
                            parametroTaf.pushUpPadrao-pushUp*2,
                            parametroTaf.pushUpPadrao-pushUp*3,
                            parametroTaf.pushUpPadrao-pushUp*4,
                            parametroTaf.pushUpPadrao-pushUp*5,
                            parametroTaf.pushUpPadrao-pushUp*6,
                            parametroTaf.pushUpPadrao-pushUp*7,
                            parametroTaf.pushUpPadrao-pushUp*8,
                            parametroTaf.pushUpPadrao-pushUp*9,
                        ]
                        
                        if (document.querySelector('input[id="flexao"]').value >= pushUpRest[0]){
                            this.flexao = 100;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[1]){
                            this.flexao = 90;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[2]){
                            this.flexao = 80;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[3]){
                            this.flexao = 70;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[4]){
                            this.flexao = 60;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[5]){
                            this.flexao = 50;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[6]){
                            this.flexao = 40;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[7]){
                            this.flexao = 30;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[8]){
                            this.flexao = 20;
                        }
                        else if (document.querySelector('input[id="flexao"]').value >= pushUpRest[9]){
                            this.flexao = 10;
                        }
                        else{
                            this.flexao = 0;
                        }
                        
                        // Classificação da ABDOMINAL:
                        let ab = 2;
                        let abRest = [
                            parametroTaf.abPadrao,
                            parametroTaf.abPadrao-ab,
                            parametroTaf.abPadrao-ab*2,
                            parametroTaf.abPadrao-ab*3,
                            parametroTaf.abPadrao-ab*4,
                            parametroTaf.abPadrao-ab*5,
                            parametroTaf.abPadrao-ab*6,
                            parametroTaf.abPadrao-ab*7,
                            parametroTaf.abPadrao-ab*8,
                            parametroTaf.abPadrao-ab*9,
                        ]
                        
                        if (document.querySelector('input[id="abdominal"]').value >= abRest[0]){
                            this.abdominal = 100;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[1]){
                            this.abdominal = 90;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[2]){
                            this.abdominal = 80;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[3]){
                            this.abdominal = 70;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[4]){
                            this.abdominal = 60;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[5]){
                            this.abdominal = 50;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[6]){
                            this.abdominal = 40;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[7]){
                            this.abdominal = 30;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[8]){
                            this.abdominal = 20;
                        }
                        else if (document.querySelector('input[id="abdominal"]').value >= abRest[9]){
                            this.abdominal = 10;
                        }
                        else{
                            this.abdominal = 0;
                        }
                        
                        padrao.c = corrida;
                        padrao.b = "Não é exigido";
                        padrao.f = flexao;
                        padrao.abd = abdominal;

                        console.log(padrao);
                        }


// Aqui se encontra a FUNÇÃO SELETORA DE GÊNERO E IDADE:
function seletorM() {

    if ((document.querySelector('input[id="idade"]').value) <= 20){
        parametroTaf.runPadrao = 3000;
        parametroTaf.pullUpPadrao = 11;
        parametroTaf.pushUpPadrao = 34;
        parametroTaf.abPadrao = 46;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 25){
        parametroTaf.runPadrao = 2900;
        parametroTaf.pullUpPadrao = 10;
        parametroTaf.pushUpPadrao = 32;
        parametroTaf.abPadrao = 44;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 30){
        parametroTaf.runPadrao = 2800;
        parametroTaf.pullUpPadrao = 9;
        parametroTaf.pushUpPadrao = 30;
        parametroTaf.abPadrao = 42;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 35){
        parametroTaf.runPadrao = 2700;
        parametroTaf.pullUpPadrao = 8;
        parametroTaf.pushUpPadrao = 28;
        parametroTaf.abPadrao = 40;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 40){
        parametroTaf.runPadrao = 2600;
        parametroTaf.pullUpPadrao = 7;
        parametroTaf.pushUpPadrao = 26;
        parametroTaf.abPadrao = 38;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 45){
        parametroTaf.runPadrao = 2500;
        parametroTaf.pullUpPadrao = 6;
        parametroTaf.pushUpPadrao = 24;
        parametroTaf.abPadrao = 36;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 50){
        parametroTaf.runPadrao = 2400;
        parametroTaf.pullUpPadrao = 5;
        parametroTaf.pushUpPadrao = 22;
        parametroTaf.abPadrao = 34;
        return tafM();
    }
    else if ((document.querySelector('input[id="idade"]').value) >= 51){
        parametroTaf.runPadrao = 2300;
        parametroTaf.pullUpPadrao = 4;
        parametroTaf.pushUpPadrao = 20;
        parametroTaf.abPadrao = 32;
        return tafM();
    }
    else{
        console.log("SELECTOR FUNCTION ERROR");
    }
}

function seletorF() {

    if ((document.querySelector('input[id="idade"]').value) <= 20){
        parametroTaf.runPadrao = 2600;
        parametroTaf.pushUpPadrao = 38;
        parametroTaf.abPadrao = 36;        
        return tafF();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 25){
        parametroTaf.runPadrao = 2500;
        parametroTaf.pushUpPadrao = 36;
        parametroTaf.abPadrao = 32;        
        return tafF();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 30){
        parametroTaf.runPadrao = 2400;
        parametroTaf.pushUpPadrao = 34;
        parametroTaf.abPadrao = 30;        
        return tafF();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 35){
        parametroTaf.runPadrao = 2300;
        parametroTaf.pushUpPadrao = 32;
        parametroTaf.abPadrao = 28;        
        return tafF();
    }
    else if ((document.querySelector('input[id="idade"]').value) <= 40){
        parametroTaf.runPadrao = 2200;
        parametroTaf.pushUpPadrao = 30;
        parametroTaf.abPadrao = 26;        
        return tafF();
    }
    else if ((document.querySelector('input[id="idade"]').value) >= 40){
        parametroTaf.runPadrao = 2100;
        parametroTaf.pushUpPadrao = 28;
        parametroTaf.abPadrao = 24;        
        return tafF();
    }
    else{
        console.log("SELECTOR FUNCTION ERROR");
    }
}

// Aqui se encontra a FUNÇÃO CLASSIFICADORA DO TAF:
function classificator() {

    if ((document.querySelector('input[name="genero"]:checked').value) == "M"){
        return (seletorM());
    }

    if ((document.querySelector('input[name="genero"]:checked').value) == "F"){
        return (seletorF());
    }

    else {
        padrao.c = "RUN PARAMETER ERROR";
        padrao.b = "PULL UP PARAMETER ERROR";
        padrao.f = "PUSH UP PARAMETER ERROR";
        padrao.abd = "ABDOMINAL PARAMETER ERROR";

        console.log(padrao);
    }
}
