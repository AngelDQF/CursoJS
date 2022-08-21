//Funciones
/*
function saludar(){
    let respuesta=prompt("Hola, ¿Qué tal tu día?");
    if(respuesta=="bien"){
        alert("Me alegro");
    }
    else{alert("Una pena");}
}

function sumaPrompt(
  n1 = parseInt(prompt("Ingrese el número 1: ")),
  n2 = parseInt(prompt("Ingrese el número 2: "))
) {
  let x = n1 + n2;

  document.write(x);
}
function suma(n,m){
    let res=n+m;
    return res;
}
let resultado=suma(20,15);
document.write(resultado);

function saludar2(nombre){
    let frase=`<br/>!Hola ${nombre}¡ ¿Cómo estás?`
    document.write(frase);
}
saludar2("Angel");*/
//-------------FORMAS DE CREAR FUNCIONES------------------------------
//Forma #1
function ejemplo1(a, b) {
  let res = a + b;
  alert(res);
}
//Forma #2
const ejemplo2 = function () {
  let res = a + b;
  alert(res);
};
//Forma #3 ->Funciones flecha y más recomendadas
//El function se sustituye por "()=>""
//Las funciones flecha se returnan automaticamente
const ejemplo3 = (a, b) => {
  let res = a + b;
  alert(res);
};

/*---------------------------------PROBLEMA A----------------------------------------
Cofla se enoja con el heladero y decide dar su dinero a un joven sin hogar el cual
decide comprar un boleto de lotería y este joven gana la lotería, para festejar
decide dar una fiesta para ello compro una maquina que solo deja pasar a personas que
sean mayores de edad, entre otras cosas...

1.Dejar pasar solo mayores de edad (+18).
2.La primera persona que entre despues de las 2 AM, no paga.

Utilice funciones
*/

/*
let free=false;
const validarCliente=(time)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if(edad>=18){
        if (time>=2 && time < 7 && free==false){
            alert("Puede entrar gratis, ya que eres la primer persona despues de las 2 AM");
            free=true;
        }else{
            alert("Puede pasar, sin embargo, debe pagar la entrada...");
        }
    }
    else{alert("No puede entrar ya que no se aceptan menores de edad");}
}
validarCliente(12);
validarCliente(11);
validarCliente(10);
validarCliente(9);
validarCliente(2);
validarCliente(3);
validarCliente(20);
validarCliente(12);
*/

/*---------------------------------PROBLEMA B------------------------------------------------
B) Cofla vulve de la comisaría exhausto y por lo cansado que estaba se fue a dormir...
Al siguiente día comienzan las clases del ciclo básico de la universidad. En su curso son 19
alumnos en total, pero surgió un problema que complicó un poco a la facultad:
Se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán 
hacer registros de datos de ningun tipo, por ende las clases no podrán comenzar hasta que 
esto este soucionado.

1. Crear mini-sistema que os permita registrar a los alumnos que estan presentes (P) y a los
   que esten ausentes (A) en clase.
2. Pasados los 30 días mostrar la situación final de todos los alumnos (Número total de 
   presentes y ausentes).
3. Se puede tener un máximo de 10% de ausencias por semestre, si se tienen más aclarar que
   está reprobado
*/
//Solución

let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];
for (let i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)) + ":", 0];
}

const tomarAsistencia = (nombre, posicion) => {
  //Posicion en la lista
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[posicion][1]++;
  }
};
for (let i = 0; i < 30; i++) {
  //30 por los 30 días
  for (let alumno in alumnosTotales) {
    tomarAsistencia(alumnosTotales[alumno][0], alumno);
  }
}
for (let alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]} <br/>
    ___________Asistencias: <b>${alumnosTotales[alumno][1]} </b><br/>
    ___________Inasistencias: <b>${30 - alumnosTotales[alumno][1]}</b><br/>`;
  if (30 - alumnosTotales[alumno][1] > 18) {
    resultado +=
      "<b style='color:red;'>Reprobado por Inasistencias</b><br/><br/>";
  } else {
    resultado += "<b style='color:green;'>Aprobado</b><br/><br/>";
  }
  document.write(resultado);
}

/*---------------------------------PROBLEMA C------------------------------------------------
C) Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea básica de 
cálculo; tiene que hacer un par de ejercicios de matemáticas que incluyen suma, resta,
multiplicación y división, realizar esto con una calculadora puede ser mucho más efectivo.

1. Crear una calculadora que nos simplifique el trabajo

const sumar = (n1, n2) => {
  return (parseFloat(n1) + parseFloat(n2)).toFixed(2);
};
const restar = (n1, n2) => {
  return (parseFloat(n1) - parseFloat(n2)).toFixed(2);
};
const multiplicar = (n1, n2) => {
  return (parseFloat(n1) * parseFloat(n2)).toFixed(2);
};
const dividir = (n1, n2) => {
  let resultado;
  if (n2 == 0) {
    resultado = "Indefinido";
  } else {
    resultado = (parseFloat(n1) / parseFloat(n2)).toFixed(2);
  }
  return resultado;
};
let n1= prompt("Ingrese el primer número: ");
let n2= prompt("Ingrese el segundo número: ");
let operacion=prompt("¿Que operación desea realizar?\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");
if (operacion=="1"){
    alert(`El resultado de la suma de ${n1} + ${n2} es: ${sumar(n1,n2)}`);
}
else if(operacion=="2"){
    alert(`El resultado de la resta de ${n1} - ${n2} es: ${restar(n1,n2)}`);
}
else if(operacion=="3"){
    alert(`El resultado de la multiplicación de ${n1} * ${n2} es: ${multiplicar(n1,n2)}`);
}
else if(operacion=="4"){
    alert(`El resultado de la resta de ${n1} / ${n2} es: ${dividir(n1,n2)}`);
}
else{
    alert("!Uy parece que has seleccionado una opción invalidad...¡");
}
*/
