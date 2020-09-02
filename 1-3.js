/**
 * Crear una función que recibiendo como argumentos un día y un mes, ambos como
números, calcule y retorne como un objeto el número de días y meses que faltan entre
dicha fecha y el día de Navidad.
 */

function christmasCountdown (day, month){
    let cDay = 25
    let cMonth = 12

    let dDay = cDay - day
    let dMonth = cMonth - month

    //He hecho este if porque si cojo el día de navidad y le resto un día mayor, me devuelve un número negativo (lo cual es matemáticamente correcto pero no es lo que buscamos)
    //Para encontrar el resultado que buscamos, transformo un mes en 30 días 
    if(day > cDay){
      dDay = dDay + 30
      dMonth = dMonth - 1
    } 

    //Con esto arreglo los meses de 31 días
    if(day == 31){
        dDay = dDay + 1
    }


    //Con esto arreglo los últimos días de diciembre
    if (month == cMonth && day > cDay ){
        dMonth = dMonth + 12
    }

    return {
        day: dDay,
        month: dMonth,
    }
    
}

/**
 * Escribir una función que recibiendo dos números retorne un objeto conteniendo el
resultado de las 4 operaciones aritméticas básicas (suma, resta, multiplicación y
división) ¿Existe alguna consideración especial a mencionar?
 */

 function operations(num1, num2){
    let sum = num1 + num2
    let sub = num1 - num2
    let mult = num1 * num2
    //dividir entre 0 no está definido matemáticamente pero javascript te da un resultado que puedes utilizar
    let div = num1 / num2

    return {
        sum: sum,
        sub: sub,
        mult: mult,
        div: div,
    }
 }

/**
 * Escribir una función que calcule e imprima todas las combinaciones de una cadena de
longitud indeterminada manteniendo el orden como en el siguiente ejemplo:
- Cadena de entrada: sol
- Resultados: s, o , l, so, ol, sol
 */

 function allSubStrings(string){
     for(let len = 1; len <= string.length; len++){
         for(let i = 0; i <= string.length - len; i++){
             console.log(string.slice(i, i + len))
         }
     }
 }

 allSubStrings("abc")