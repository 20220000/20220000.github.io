function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function clearText(){
    var input = document.querySelector('.input-texto-encriptar');
    if (input.value === "Ingrese el texto aquí"){
        input.value = '';
    }
}

function restoreText(){
    var input = document.querySelector('.input-texto-encriptar');
    if(input.value === ''){
        input.value = "Ingrese el texto aquí";
    }
}

function ajustarInput(){
    input.style.width = (input.value.length + 1) * 8 + 'px';
}

function manejarMensaje(encriptado){
    var barraLateral = document.querySelector('.barra-lateral');


    barraLateral.className = '';
    barraLateral.id = 'barra-lateral-encriptacion';

    //Eliminar la imagen, el título y el mensaje existentes
    var imagen = barraLateral.querySelector('.barra-lateral-imagen');
    var mensaje = barraLateral.querySelector('.barra-lateral-mensaje');
    barraLateral.removeChild(imagen);
    barraLateral.removeChild(mensaje);

    //Crear un nuevo elemento <p> para mostrar el mensaje 
    var nuevoMensaje = document.createElement('p');
    nuevoMensaje.textContent = encriptado;
    nuevoMensaje.id = "mensaje-encriptado-nuevo";
    barraLateral.appendChild(nuevoMensaje);

    //Crear botón para copiar el texto
    var botonCopiar = document.createElement('button');
    botonCopiar.textContent = "COPIAR";
    botonCopiar.className = "boton-copiar";
    botonCopiar.onclick = copiarTexto;
    barraLateral.appendChild(botonCopiar);

    
}

function copiarTexto(){
    var textoEncriptado = document.querySelector('#mensaje-encriptado-nuevo').textContent;

    //Copiar el texto al portapapeles
    navigator.clipboard.writeText(textoEncriptado).then(function(){
        console.log('Texto copiado correctamente. ');
        alert('Texto copiado correctamente');
        //Enfocar nuevamente el área de texto después de aceptar la alerta
    }, function(err){
        console.error('Error al copiar el texto: ', err);
        alert('Error al copiar el texto: ', err);
    }).finally(function(){
        document.querySelector('.input-texto-encriptar').focus();
    });
}


function obtenerTexto(){
    var texto =  document.querySelector('.input-texto-encriptar').value;
    return texto;
}

function encriptarTexto(texto){
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

function desencriptarTexto(texto){
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}

function botonEncriptar(){
    var titulo = document.querySelector('#titulo-encriptacion');
    titulo.textContent = 'MENSAJE ENCRIPTADO';

    var texto =  obtenerTexto();
    var textoEncriptado = encriptarTexto(texto);

    if(textoEncriptado !== ""){
        manejarMensaje(textoEncriptado);
    }

}

function botonDesencriptar(){
    var titulo = document.querySelector('#titulo-encriptacion');
    titulo.textContent = 'MENSAJE DESENCRIPTADO';

    var texto =  obtenerTexto();
    var textoDesencriptado = desencriptarTexto(texto);
    
    if(textoDesencriptado !== ""){
        manejarMensaje(textoDesencriptado);
    }

}

asignarTextoElemento('#boton-encriptar', 'Encriptar');
asignarTextoElemento('#boton-desencriptar', 'Desencriptar')
asignarTextoElemento('#titulo-encriptacion', 'Ningun mensaje fue encontrado');
asignarTextoElemento('#mensaje-encriptado', 'Ingresa el texto que desees encriptar o desencriptar')
asignarTextoElemento('.input-texto-encriptar', 'Ingrese el texto aquí');




