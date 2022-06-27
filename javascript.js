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






//const x = palabras2.map(function(palabra) {
//    return alert(palabra.pista);
//});




//AZU V.1
/*

String.prototype.replaceAt=function(index, character){ 
    return this.substr(0, index) + character + this.substr(index+character.length);}
const palabras = ['dinero','ahorro','banco','credito','plazos','tarjeta'];
let palabra = "";
let palabraGuiones = "";
nuevoJuego();

const palabras2 = [
        {
            palabra: 'dinero',
            pista: 'Es verde',
        },
        {
            palabra: 'banco',
            pista: 'Guarda el dinero',
        },
        {
            palabra: 'crédito',
            pista: 'duele pagarlo',
        },
        {
            palabra: 'plazos',
            pista: 'lapso de tiempo',
        },
        {
            palabra: 'tarjeta',
            pista: 'es de plástico',
        }
];

//let palabra2 = palabras2.palabra[Math.floor(Math.random()*palabras2.palabra.length)];
//alert(palabra2);
let palabra2 = [];
palabra2 = palabras2[Math.floor(Math.random()*palabras2.length)];
alert(palabra2.palabra);
alert(palabra2.pista);

//const x = palabras2.map(function(palabra) {
//    return alert(palabra.pista);
//});

function nuevoJuego(){
    palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraGuiones = palabra.replace(/./g,"_ ");
    contadorfallas = 0;
    alert(palabra + "-" + palabraGuiones);
    document.querySelector('#guiones').innerHTML = palabraGuiones;
    document.querySelector('#ahorcado').style.backgroundPosition= '0px 0';
}


function buscaLetra(a){
    const letra = a;
    let falla = true;
    for(const i in palabra){
        if (letra == palabra[i]){
            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            falla = false;
         }
    }
    if(falla){
        contadorfallas++;
        document.querySelector('#ahorcado').style.backgroundPosition= -(400*contadorfallas) + 'px 0';
        if (contadorfallas == 6){
            alert("perdiste");
        }
    }
    else{
        if (palabraGuiones.indexOf('_')<0){
            alert("ganaste");
        }
    }
    document.querySelector('#guiones').innerHTML = palabraGuiones;
};



*/

















//JUEGO DEL AHORCADO EJEMPLO



/*
document.querySelector('#calcular').addEventListener('click',()=>
{
    const letra = document.querySelector('#letra').value;
    let falla = true;
    for(const i in palabra){
        if (letra == palabra[i]){
            palabraGuiones = palabraGuiones.replaceAt(i*2, letra);
            falla = false;

         }
    }

    if(falla){
        alert("fallaste");
        contadorfallas++;
        if (contadorfallas == 5){
            alert("perdiste");
        }
    }
    else{
        if (palabraGuiones.indexOf('_')<0){
            alert("ganaste");
        }
    }
    document.querySelector('#guiones').innerHTML = palabraGuiones;
    document.querySelector('#letra').value = '';

});*/
