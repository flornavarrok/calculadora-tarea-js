
let numero1= prompt("Ingrese un número");
let operacion= prompt("Ingrese operación que deseas realizar (+,-,* o /)");
let numero2= prompt("Ingrese otro número");
let resultado

switch (operacion) {
  case "+":
    resultado= parseInt (numero1)+ parseInt(numero2)
    alert("Tu resultado es: " +resultado);
    break;
  case "-":
    resultado= parseInt (numero1)- parseInt(numero2)
    alert("Tu resultado es: " +resultado);
    break;
  case "*":
    resultado= parseInt (numero1)* parseInt(numero2)
    alert("Tu resultado es: " +resultado);
    break;
  case "/":
    resultado= parseInt (numero1)/ parseInt(numero2)
    if (numero2>0){
      alert("Tu resultado es: " +resultado);
    } else {
    alert("No se puede dividir por 0");
    }
    break;
  default: 
    alert ("Error, ingrese un caracter válido (+,-,* o /) ")
    break;
}
