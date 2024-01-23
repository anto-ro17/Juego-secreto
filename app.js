let númeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let númeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(númeroDeUsuario === númeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(númeroDeUsuario > númeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpirCaja()
    }
    return;
} 

function limpirCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function generarNúmeroSecreto() {
   let númeroGenerado = Math.floor(Math.random()*númeroMaximo)+1;

   console.log(númeroGenerado);
   console.log(listaNúmerosSorteados);

   if(listaNúmerosSorteados.length == númeroMaximo){
        asignarTextoElemento('p', 'Se han asignado todos los números posibles')
   } else {
       if (listaNúmerosSorteados.includes(númeroGenerado)){
            return generarNúmeroSecreto();
           } else{
                listaNúmerosSorteados.push(númeroGenerado);
             return númeroGenerado;
           }    
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Nuevo Juego del número secreto");
    asignarTextoElemento('p', `Adivina un número del 1 al ${númeroMaximo}`);
    númeroSecreto = generarNúmeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpirCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();