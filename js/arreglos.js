//------------------------------------------------------------
//Arrays comunes
/*let frutas=["banana","manzana","pera",5,9,"pedro"];
document.write(frutas[3]);
//------------------------------------------------------------
//Arrays asociativos
let pc1={
    nombre:"AngelPC",
    procesador:"Intel Core i7",
    ram: "8GB RAM",
    espacio:"500GB"
}
let pc2=["AngelPC","Intel Core i7","8GB RAM","500GB"];

let nombre=pc1["nombre"];
let procesador=pc1["procesador"];
let ram=pc1["ram"];
let espacio=pc1["espacio"];

let frase = `El nombre de mi PC es: <b>${nombre}</b> <br/>
             El procesador es de: <b>${procesador}</b> <br/>
             La memoria RAM es de: <b>${ram}</b> <br/>
             El espacio en disco es de: <b>${espacio}</b>`;

document.write(frase);*/
//Ciclo while y do while
/*-----------------------
let x=0;
let j=10;
let y=0;
while(x<10){
    x++;
    document.write(`${x}<br/>`);
}
document.write(`<hr/>`);
do{
    document.write(`${j}<br/>`);
    j--;
}while(j>=0)
document.write(`<hr/>`);
while(y<1000){
    document.write(`${y}<br/>`);
    if(y==10){
        break;
    }
    y++;
}
//-----------------------------------------------------------
//Ciclo For
for ( let i = 0; i < 6; i++) {
  document.write(i + "<br/>");
}
document.write( "<hr/>" );

let j;
for ( j = 0; j <= 5; j++) {
  if(j==4){
    continue;
  }
  document.write(j + "<br/>");
}
document.write( "<hr/>" );*/
//-----------------------------------------------------------
/*//For In y For Of
let animales = ["gato", "perro", "tiranosaurio rex"];
for (animal in animales) {
  document.write(animal + "<br/>");
  document.write(animales[animal] + "<br/>");
}
document.write("<hr/>");
for (animal of animales) {
  document.write(animal + "<br/>");
}
document.write("<hr/>");
document.write("<hr/>");

*///-----------------------------------------------------------
let array1 = ["maría", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];
bucle: for (let array in array2) {
  if (array == 2) {
    for (let array of array1) {
        if (array=="maría"){
            continue bucle;
        }
        document.write(array + "<br/>");
    }
  } else {
    document.write(array2[array] + "<br/>");
  }
}
