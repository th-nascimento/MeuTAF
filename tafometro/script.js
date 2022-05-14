let result = document.getElementById("result")

/* result.innerHTML="<p>A partir daqui o Java Script será integrado ao projeto.</p>" */


function taf20(){

    let c = this.corrida;

            if (document.querySelector('input[id="corrida"]').value >= 3000){
                return this.corrida = 100;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2900){
                return this.corrida = 90;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2800){
                return this.corrida = 80;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2700){
                return this.corrida = 70;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2600){
                return this.corrida = 60;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2500){
                return this.corrida = 50;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2400){
                return this.corrida = 40;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2300){
                return this.corrida = 30;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2200){
                return this.corrida = 20;
            }
            else if (document.querySelector('input[id="corrida"]').value >= 2100){
                return this.corrida = 10;
            }
            else{
                return this.corrida = 0;
            }

// Classificação da barra:

            if (document.querySelector('input[id="barra"]').value >= 11){
                return this.barra = 100;
            }
            else if (document.querySelector('input[id="barra"]').value >= 10){
                return this.barra = 90;
            }
            else if (document.querySelector('input[id="barra"]').value >= 9){
                return this.barra = 80;
            }
            else if (document.querySelector('input[id="barra"]').value >= 8){
                return this.barra = 70;
            }
            else if (document.querySelector('input[id="barra"]').value >= 7){
                return this.barra = 60;
            }
            else if (document.querySelector('input[id="barra"]').value >= 6){
                return this.barra = 50;
            }
            else if (document.querySelector('input[id="barra"]').value >= 5){
                return this.barra = 40;
            }
            else if (document.querySelector('input[id="barra"]').value >= 4){
                return this.barra = 30;
            }
            else if (document.querySelector('input[id="barra"]').value >= 3){
                return this.barra = 20;
            }
            else if (document.querySelector('input[id="barra"]').value >= 2){
                return this.barra = 10;
            }
            else{
                return this.barra = 0;
            }

        
}


function classificator() {

    if ((document.querySelector('input[name="genero"]:checked').value) == "M" && (document.querySelector('input[id="idade"]').value) <= 20){
        return taf20();
    }

    else {
        return this.corrida = "ERROR", this.barra = "ERROR";
    }
}


