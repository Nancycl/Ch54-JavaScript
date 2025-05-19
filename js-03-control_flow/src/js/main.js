/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

const verificarEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
}
console.log(verificarEdad(19));

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const nuevaEdad = tuEdad => {
    if (tuEdad >= 18 && tuEdad <= 30) return "Tu luchador es Místico";
    else if (tuEdad >= 31) return "Tu luchador es el perro Aguayo";
    else return "Tu luchador es el Penta";
}
const imprimir = nuevaEdad (28);
console.log(imprimir);


{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar)
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar)
    }
    console.log(myVarLet, myVarConst, myVarVar)
}


//Ejercicios mentales


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego": 
        case "Besito":
        case "Fijól":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es";        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril
console.log( evaluarNombre("Milo") ); // Es de Carlos
console.log( evaluarNombre("Borrego") ); // Es de Jessica

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
*/
/* versión con switch
*/
const velocidad = (nivel) => {
    let mensaje;
    switch (nivel) {
        case 0:
            mensaje = "Velocidad 0: Apagado";
            break;
        case 1:
            mensaje = "Velocidad 1: Baja";
            break;
        case 2:
            mensaje = "Velocidad 2: Media";
            break;
        case 3:
            mensaje = "Velocidad 3: Alta";
            break;
        default:
            mensaje = "Velocidad: desconocida";
    }
    return mensaje;
}
console.log(velocidad(0));
/* version con if-else
*/ 

const verificarVelocidad = nivel2 => {
    if (nivel2 === 0) return "Velocidad 0: Apagado";
    else if (nivel2 === 1) return "Velocidad 1: Baja";
    else if (nivel2 === 2) return "Velocidad 2: Media";
    else if (nivel2 === 3) return "Velocidad 3: Alta";
    else return "Velocidad: desconocida";

}
const numeroDeVelocidad = verificarVelocidad(2);
console.log(numeroDeVelocidad);

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) );
console.log( verficarPagoDeTarjeta( false ) );


const verficarPagoDeTarjetaUsandoTernario = ( estaPagado ) =>{
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"


/*
 Dado un número entero, imprimir:
 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 - Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola.
 - Realizar una versión if-else, switch y operador ternario.
*/


const tipoDeNumero = numero => {
    if (numero < 0 ) return "Negativo";
    else if (numero == 0) return "Cero";
    else if (numero > 0 && numero < 100) return "Positivo"
    else return "Grande";
}
const resultadoNumero = tipoDeNumero(-19);
console.log(resultadoNumero);


const tipoDeNumero2 = (numero2) => {
    switch (numero2) {
        case numero2 < 0:
            mensajePorElTipoDeNumero = "Negativo";
            break;
        case numero2 = 0:
            mensajePorElTipoDeNumero = "Cero";
            break;
        case numero2 > 0 && numero2 < 100:
            mensajePorElTipoDeNumero = "Positivo";
            break;
        default :
            mensajePorElTipoDeNumero = "Grande";
    }
    return mensajePorElTipoDeNumero;
}
console.log(tipoDeNumero2(5));

// ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande

// Usando operador ternario
function evaluarNumeroTernario(num) {
    return num < 0 ? "Negativo" :
           num === 0 ? "Cero" :
           num < 100 ? "Positivo" :
           "Grande";
}
console.log(evaluarNumeroTernario(-5));
console.log(evaluarNumeroTernario(0));
console.log(evaluarNumeroTernario(99));
console.log(evaluarNumeroTernario(1000));


/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */

function edadPersona(edad) {
    return edad >= 18 ? "Eres mayo de edad" :
           "Eres menor de edad";
}
console.log(edadPersona(16));


// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


function mesActual(mes) {
    let resultadoActual;
    switch(mes) {
        case "12": 
        case "1":
        case "2":
        resultadoActual = "invierno";
        break;
        case "3": 
        case "4":
        case "5":
        resultadoActual = "primavera";
        break;
        case "6": 
        case "7":
        case "8":
        resultadoActual = "verano";
        break;
        case "9": 
        case "10":
        case "11":
        resultadoActual = "otoño";
        break;
    }
    return resultadoActual;
} 
console.log(mesActual("12"));
