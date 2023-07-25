// 1 <!-- validar nombre -->
        // Comprobar que es un string 
        // verificar que solo hay letras 

        /**
         * funcion para validar un texto y que no sea vacio
         * @param {string} nombre 
         * @return{boolean} bolean true or false
         * 
         */
function validarNombre(nombre){
        const name = nombre.trim();
        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
        console.log("sin limpiar:", nombre, " y limpio:", name)
// if(!pattern.test(input.value)){ 
        if (typeof name !== 'string' || name === ""||!pattern.test(name)){
                console.log("entro en el if")
        
                return false    
        } else {
                return true
        }
}

console.log(validarNombre("                    "))
console.log(validarNombre(" MAria Jose  "))
console.log(validarNombre(" MAr ia Jose65656656565656  "))


// 2<!--  validar email -->
        // localiza que la @ este en medio 
        // que termine en punto y extencion de servido 
        // ?? restringir los sevidores de email o ¿? listado de servidores ¿?
        // Devolver verdadero o falso

function ValidarEmeil(emeil){
        const correo = emeil.trim();
        const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
console.log ("sin limpiar:", emeil,"y limpio",correo)
        if (typeof correo !=='string' || correo ==="" || !pattern.test(correo)){
                console.log ("entro en e if")
                return false
        }else{
                return true
        }
}
console.log(ValidarEmeil("sinaijose@gmail.com"))











// URL
function Validarurl(url){
        const URL = url.trim();
        const pattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        console.log("sin limpiar:", URL,"y limpio",URL)
        if(typeof url !=='string' || url ==="" || !pattern.test(url)){
                console.log("entro en el if")
                return false
        }else{
                return true 
        }

        }
        console.log(Validarurl("https://www.youtube.com/"))





        // 3<!--validar fecha-->

function validarfecha(fecha1){
        const fecha = fecha1.trim();
        const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/
        console.log("sin limpiar:", fecha,"y limpio",fecha)
        if(typeof fecha !=='string' || fecha ==="" || !pattern.test(fecha)){
                console.log("entro en el if ")
                return false
        }else{
                return true
        }
}

console.log(validarfecha("12/12/2023"))
// 4<!--validar tiempo-->


function validartiempo(tiempo1){
        const tiempo = tiempo1.trim();
        const pattern = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
        // console.log("sin limpiar:", tiempo,"y limpio",tiempo)
        if(typeof tiempo !=='string' || tiempo === "" || !pattern.test(tiempo)) {
                console.log("entro en el if")
                return false
        }else{
                return true

        }
}
console.log(validartiempo("02:20"))


// 5<!--validar fecha,hora y nacimiento -->
function validarfechahoranacimiento(nacimiento1){

        const nacimiento = nacimiento1.trim();
        const pattern = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})(\s)([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/
        if(typeof nacimiento !=='string' || nacimiento === "" || !pattern.test(nacimiento)){
console.log("entro en el if")
return false
        }else{
return true
        }
        }
        
console.log(validarfechahoranacimiento("22/13:23/2023"))


// 6<!--validar mes -->
function validarmes(mes1){
        const mes = mes1.trim();
        const pattern = /(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?(\d{1,2}(st|nd|rd|th)?)?(([,.\-\/])\D?)?((19[7-9]\d|20\d{2})|\d{2})*;/
if(typeof mes !=='string' || mes ==="" || !pattern.test(mes)){
        console.log("entro en el if")
return false
        }else{
return true

}
}
 console.log(validarmes("enero de 2022"))
// 7<!--validar semana-->

// 8<!-- validar de un rango numerico min 10- max 10-->

// 9<!--validar semana-->

// 10<!--validar un intervalo del 0 a 10-->

// 11<!--validar telefono-->
        // verifica que es un numero 
        // verificar que tenga 9 caracteres 

// 12<!--validar termino de busqueda -->

// 13<!--validar color favorito-->

// 