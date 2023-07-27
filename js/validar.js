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











// 3 URL
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





        // 4<!--validar fecha-->

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
// 5<!--validar tiempo-->


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


// 6<!--validar fecha,hora y nacimiento -->
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


// 7<!--validar mes -->
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
// 8<!--validar semana-->

function validarsemana(semana1){
        const semana = semana1.trim();
        const pattern = /^(?<week>(\d{2}))(?<year>(\d{2}){0,2}[-\/]?)/;
        if(typeof semana !=='string' || semana ==="" || !pattern.test(semana)){
                console.log("entro en el if")
                return false
        }else{
                return true
        }
        }


// 9<!-- validar de un rango numerico min 10- max 10-->
function validarrangonumerico(validarrango1){
        const rangonumerico = validarrango1.trim();
        // console.log("Verificacion antes del if", typeof rangonumerico !=='string'|| rangonumerico =="" ||
        // rangonumerico < -10 || rangonumerico > 10)
        if(typeof rangonumerico !=='string'|| rangonumerico =="" ||
        rangonumerico < -10 || rangonumerico > 10){
                
                
        console.log("Uno de los valores no es válido")

        return false
}else{
        return true
}
}
console.log(validarrangonumerico("-10"))
console.log(validarrangonumerico("10"))
console.log(validarrangonumerico("18"))
console.log(validarrangonumerico("-15"))

// 10<!--validar un intervalo del 0 a 10-->

function validarRango1(validarRango2){
        const rango = validarRango2.trim();
        // console.log("Verificacion antes del if", typeof rangonumerico !=='string'|| rangonumerico =="" ||
        // rangonumerico < -10 || rangonumerico > 10)
        if(typeof rango !=='string'|| rango =="" ||
        rango < 0 || rango > 10){
                
                
        console.log("Uno de los valores no es válido")

        return false
}else{
        return true
}
}
console.log("TestRango", validarRango1("-10"))
console.log(validarRango1("10"))
console.log(validarRango1("18"))
console.log(validarRango1("5"))

// 11<!--validar telefono-->
        // verifica que es un numero 
        // verificar que tenga 9 caracteres 
function validarTelefono(telefono){
        const phone = telefono.trim()
        const pattern = /(6|7)[ -]*([0-9][ -]*){8}/;
        if(typeof phone !=='string' || phone ==="" || !pattern.test(phone)){
                console.log("entro en el if")
                return false
        }else{
                return true
        }
}





// 12<!--validar termino de busqueda --> //copia y pega, no me seas del campo xd

function validarBusqueda(busqueda){
        const search = busqueda.trim();
        const pattern = /^[A-Za-z0-9\s]+$/;
        // console.log("sin limpiar:", search,"y limpio",search)
        if(typeof search !=='string' || search === "" || !pattern.test(search)) {
                console.log("entro en el if")
                return false
        }else{
                return true

        }
}
console.log(validarBusqueda("algo de 23"))
console.log(validarBusqueda("1323223"))


// 13<!--validar color favorito-->

function validarColor(color){
        const colores = color.trim();
        const pattern = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)/;
        // console.log("sin limpiar:", colores,"y limpio",colores)
        if(typeof colores !=='string' || colores === "" || !pattern.test(colores)) {
                console.log("entro en el if")
                return false
        }else{ 
                return true

        }
}
console.log(validarColor("#ffb3b3"))
console.log(validarColor("#ffb3b3h76"))
// 