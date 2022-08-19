/*---------------------------------PROBLEMAS DE COFLA-----------------------------------------
Tres chicos de 23 años entran a una heladería, pero hay un problema los precios no estan 
a cada lado de su respectivo helado; ellos quieren comprar el helado más caro que puedan 
con el dinero que tienen
1. Crear una solución en la cual se les pida que ingresen el monto que tienen y mostrar el
   helado más caro que pueden comprar.
2. Si hay 2 o más, mostrar ambos.
3. Indicar el vuelto.

____________Datos:___________________
Roberto tiene $1.5
Pedro tiene $1.7
Cofla tiene $3

Precio de los helados:
-Palito de helado de agua -----------> $0.6
-Palito de helado de crema ----------> $1.0
-Bombon helado marca heladix --------> $1.6
-Bombon helado marca heladovich -----> $1.7
-Bombon helado marca helardo --------> $1.8
-Potecito de helado con confites-----> $2.9
-Pote de 1/4 KG ---------------------> $2.9
*/
let dineroRoberto = prompt("¿Cuantó dinero tienes Roberto?");
let dineroPedro = prompt("¿Cuantó dinero tienes Pedro?");
let dineroCofla = prompt("¿Cuantó dinero tienes Cofla?");
dineroCofla=parseFloat(dineroCofla);
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert("-Roberto Compra un helado de agua");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert("-Roberto Compra un helado de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("-Roberto Compra un Bombon helado marca heladix");
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("-Roberto Compra un Bombon helado marca heladovich");
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("-Roberto Compra un Bombon helado marca helardo");
} else if (dineroRoberto >= 2.9) {
  alert("-Roberto Compra un Potecito de helado con confites o Pote de 1/4 KG");
} else {
  alert("Lo sentimos su dinero es insuficiente para adquirir un producto");
}
//---------------------------------------------------------------------------------
if (dineroPedro >= 0.6 && dineroPedro < 1) {
   alert("-Pedro Compra un helado de agua");
 } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
   alert("-Pedro Compra un helado de crema");
 } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
   alert("-Pedro Compra un Bombon helado marca heladix");
 } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
   alert("-Pedro Compra un Bombon helado marca heladovich");
 } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
   alert("-Pedro Compra un Bombon helado marca helardo");
 } else if (dineroPedro >= 2.9) {
   alert("-Pedro Compra un Potecito de helado con confites o un Pote de 1/4 KG");
 } else {
   alert("Lo sentimos su dinero es insuficiente para adquirir un producto");
 }
 //---------------------------------------------------------------------------------
if (dineroCofla >= 0.6 && dineroCofla < 1) {
   alert("-Cofla Compra un helado de agua y te sobran $"+(dineroCofla-0.6).toFixed(2));
 } else if (dineroCofla >= 1 && dineroCofla < 1.6) {
   alert("-Cofla Compra un helado de crema");
 } else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
   alert("-Cofla Compra Bombon helado marca heladix y te sobran $"+(dineroCofla-1).toFixed(2));
 } else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
   alert("-Cofla Compra Bombon helado marca heladovich y te sobran $"+(dineroCofla-1.7).toFixed(2));
 } else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
   alert("-Cofla Compra Bombon helado marca helardo y te sobran $"+(dineroCofla-1.8).toFixed(2));
 } else if (dineroCofla >= 2.9) {
   alert("-Cofla Compra un Potecito de helado con confites o un Pote de 1/4 KG y te sobran $"+(dineroCofla-2.9).toFixed(2));
 } else {
   alert("Lo sentimos su dinero es insuficiente para adquirir un producto");
 }
 


/*---------------------------------PROBLEMA C-----------------------------------------------
Cofla es sospechoso de un crimen por lo que es llevado a la comisaría para ser interrogado
por medio de un detector de mentiras

1. Si el sospechoso miente, le da una descarga.
2. Sino miente no hace nada.
3. Si el aparato no se decide, aclarar que la pregunta debe  ser más clara.
*/
