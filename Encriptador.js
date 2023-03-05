// // const textArea = document.querySelector(".area-texto");
// // const mensaje = document.querySelector(".area-texto2");

// // function btnEncriptar(){
// //     const texto = textArea.value.toLowerCase();

// //     var codigo = texto.replace(/e/g, "enter");
// //     codigo = codigo.replace(/o/g, "ober");
// //     codigo = codigo.replace(/i/g, "imes");
// //     codigo = codigo.replace(/a/g, "ai");
// //     codigo = codigo.replace(/u/g, "ufat");

// //     mensaje.innerHTML = codigo;
// // }

// // function btnDesencriptar(){
// //     const texto = textArea.value.toLowerCase();

// //     var codigo = texto.replace(/enter/g, "e");
// //     codigo = codigo.replace(/ober/g, "o");
// //     codigo = codigo.replace(/imes/g, "i");
// //     codigo = codigo.replace(/ai/g, "a");
// //     codigo = codigo.replace(/ufat/g, "u");

// //     mensaje.innerHTML = codigo;
// // }

// // function copiar() {
// //     mensaje.select(); 
// //     document.execCommand("copy"); 
// //     alert("Contenido copiado!");
// // }

// javascript de alura mas estable


const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".area-texto2");

 //La letra "e" es convertida para "enter"
 //La letra "i" es convertida para "imes"
 //La letra "a" es convertida para "ai"
 //La letra "o" es convertida para "ober"
 //La letra "u" es convertida para "ufat"

function btnEncriptar(){
     const textoEncriptado = encriptar(textArea.value)
     mensaje.value = textoEncriptado
     textArea.value = "";
}

function encriptar(stringEncriptada){
     let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
     stringEncriptada = stringEncriptada.toLowerCase()

     for(let i = 0; i < matrizCodigo.length; i++){
         if(stringEncriptada.includes(matrizCodigo[i][0])){
             stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
         }
     }
     return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
     mensaje.value = textoEncriptado
     textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar() {
    mensaje.select(); 
    document.execCommand("copy");
}
