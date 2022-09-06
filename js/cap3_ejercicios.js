/*Cofla entro a una tienda de celulares porque piensa comprar uno, de todos los
modelos que habían disponibles a cofla le llamarón la atención 3 modelos en 
especifico, el problema es que los vendedores no saben nada de dichos modelos así
que no pueden recomendarle nada sobre los modelos a Cofla, antes de comprar quiere
ver el comportamiento y cualidades de cada uno
----------------------------------------------------------------------------------
1. Crear un sistema para mostrar las particularidades de los 3 modelos
2. Cada uno debe tener color, peso, resolución de pantalla, cámara y memoria RAM
3. Deben poder prender, reiniciar, tomar fotos y grabar.
*/
class Celular {
  //rdp=>Resolción de pantalla | rdc=>Ressolución de cámara
  constructor(color, peso, tamanio, resolucionDeCamara, memoriaRAM) {
    this.color = color;
    this.peso = peso;
    this.tamanio = tamanio;
    this.resolucionDeCamara = resolucionDeCamara;
    this.memoriaRAM = memoriaRAM;
    this.encendido = false;
  }

  btnEncendido() {
    if (this.encendido == true) {
      alert("Celular Apagado");
      this.encendido = false;
    } else {
      alert("Celular Encendido");
      this.encendido = true;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("Reiniciando celular...");
    } else {
      alert("No se puede reiniciar el celular mientras este apagado");
    }
  }
  tomarFoto() {
    alert(`Foto tomada en una resolucion de ${this.resolucionDeCamara}`);
  }
  grabarVideo() {
    alert(`grabando video en una resolucion de: ${this.resolucionDeCamara}`);
  }
  mostrarInfo() {
    return `
    Color: <b>${this.color}</b><br/>
    Peso: <b>${this.peso}</b><br/>
    Tamaño: <b>${this.tamanio}</b><br/>
    Resolución de cámara: <b>${this.resolucionDeCamara}</b><br/>
    Memoria RAM: <b>${this.memoriaRAM}</b><br/>
    `;
  }
}
// const celular1 = new Celular("negro","150g","104","4 pul","full hd","32 RAM");
// const celular2 = new Celular("blanco", "102g", "104", "5 pul", "201", "32 RAM");
// const celular3 = new Celular("rojo", "103g", "104", "9 pul", "201", "32 RAM");

// document.write(`
// ${celular1.mostrarInfo()}
// ${celular2.mostrarInfo()}
// ${celular3.mostrarInfo()}
// `);
// ---------------------------------------------------------------------------------
//Implementar todas estas cualidades a los celulares de alta gama
class AltaGama extends Celular {
  constructor(
    color,
    peso,
    tamanio,
    resolucionDeCamara,
    memoriaRAM,
    resolucionDeCamaraExtra
  ) {
    super(color, peso, tamanio, resolucionDeCamara, memoriaRAM);
    this.resolucionDeCamaraExtra = resolucionDeCamaraExtra;
  }
  grabarVideoLento() {
    alert("Estas grabando en cámara lenta");
  }
  reconocimientoFacial() {
    alert("Vamos a iniciar un reconocimiento facial");
  }
  infoAltaGama() {
    return (
      this.mostrarInfo() +
      `Resolución cámara trasera: <b>${this.resolucionDeCamaraExtra}</b><hr/>`
    );
  }
}
// const celular1 = new AltaGama("rojo", "130g", "6 pulgadas", "4k", "32gb RAM","HD");
// const celular2 = new AltaGama("verde", "110g", "5 pulgadas", "4k", "4gb RAM","Full HD");

// document.write(celular1.infoAltaGama()+celular2.infoAltaGama());

//----------------------------------------------------------------------------------------------
//Crear una solucion
/*
- Crear sistema que ayude a cofla a decidir cual app descargar
- La informacion de los instaladores debe contener la cantidad de descargas y la puntuación de 
  los usuarios
- Las Apps se deben poder instalar, abrir, cerrar y desinstalar.
*/
class App {
  constructor(nombre,descargas, puntuacion, peso) {
    this.nombre=nombre;
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  abrir(){
    if(this.iniciada==false){
      this.iniciada=true;
      alert("App Iniciada");
    }
  }
  cerrar(){
    if (this.iniciada==true){
      this.iniciada=false;
      alert("App cerrada");
    }
  }
  instalar(){
    if(this.instalada==false){
      this.instalada=true;
      alert("App instalada correctamente...");
    }
  }
  desinstalar(){
    if(this.instalada==true){
      this.instalada=false;
      alert("App desinstalada correctamente...");
    }
  }
  infoApp(){
    document.write(`<div  style="color:green;text-align:center;"><h3>${this.nombre}</h3></div>La App tiene un total de <b>${this.descargas}</b> descargas, cuenta con una
    puntuación de <b>${this.puntuacion}</b> estrellas y pesa <b>${this.peso}</b><hr/>`);
  }
}
const app=new App("Instagram","16,000","4.5","1.2GB");
const app2=new App("Facebook","16,000","4.5","1.2GB");
app.infoApp();
app2.infoApp();