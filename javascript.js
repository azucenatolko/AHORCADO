//JUEGO DEL AHORCADO

String.prototype.replaceAt=function(index, character){ 
    return this.substr(0, index) + character + this.substr(index+character.length);}
const palabras = [
        {
            palabra: 'dinero',
            pista: 'Es verde',
        },
        {
            palabra: 'banco',
            pista: 'Guarda el dinero',
        },
        {
            palabra: 'credito',
            pista: 'duele pagarlo',
        },
        {
            palabra: 'plazos',
            pista: 'lapso de tiempo',
        },
        {
            palabra: 'tarjeta',
            pista: 'es de plástico',
        },
        {
            palabra: 'otro',
            pista: 'es otro',
        }
];
let palabra = [];
let palabraGuiones = "";
nuevoJuego();

function nuevoJuego(){
    palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraGuiones = palabra.palabra.replace(/./g,"_ ");
    contadorfallas = 0;
    document.querySelector('#guiones').innerHTML = palabraGuiones;
    document.querySelector('#ahorcado').style.backgroundPosition= '0px 0';
    document.querySelector('#pista').innerHTML ='Pista: ' + palabra.pista;
}

function buscaLetra(a){
    const letra = a;
    let falla = true;
    for(const i in palabra.palabra){
        if (letra == palabra.palabra[i]){
            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            falla = false;
         }
    }
    document.querySelector('#guiones').innerHTML = palabraGuiones;
    if(falla){
        contadorfallas++;
        document.querySelector('#ahorcado').style.backgroundPosition= -(400*contadorfallas) + 'px 0';
        if (contadorfallas == 6){
            //alert("PERDISTE, la palabra es: " + palabra.palabra );
            
        }
    }
    else{
        if (palabraGuiones.indexOf('_')<0){
            //alert("GANASTE, la palabra es: " + palabra.palabra );
        }
    }
   
};


