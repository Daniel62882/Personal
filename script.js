

var botonEncriptar = document.querySelector("#boton-cifrado");
var botonDesencriptar = document.querySelector("#boton-Desencriptado");
var botonCopiar = document.querySelector("#boton-copiar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = Desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){

    var imagen = document.querySelector(".contenido");
    var h3 = document.querySelector(".contenido-error");
    var parrafo = document.querySelector(".con-parrafo");

    var resultado = document.querySelector("#texto-resultado");



    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

    resultado.textContent = textoencriptador(recuperarTexto());

}

function Desencriptar(){

    var imagen = document.querySelector(".contenido");
    var h3 = document.querySelector(".contenido-error");
    var parrafo = document.querySelector(".con-parrafo");

    var resultado = document.querySelector("#texto-resultado");



    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

    resultado.textContent = textoDesencriptar(recuperarTexto());


}



function recuperarTexto(){
    
    var area = document.querySelector("#Desencriptado");
    return area.value;


}

function textoencriptador(mensaje){
    var texto = mensaje;
 
    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    return textoEncriptado;

}

function textoDesencriptar(mensaje){

    var texto_2 = mensaje;



    var textoDesencriptado = texto_2.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    return textoDesencriptado;


}

function copiar(){
    var contenido = document.querySelector("#Desencriptado");
    contenido.select();
    document.execCommand("copy");
}



/*document.getElementById("Desencriptado").innerHTML = textoEncriptado;
document.getElementById("boton-copiar").style.display = "show";
document.getElementById("boton-copiar").style.display = "inherit";
*/