//-------------------CARACTERISTICAS DE LA POO--------------------------
//Estas caracteristicas no cuentan con palabras reservadas
//Abstraccion: hacemos que el objeto sea lo menos complejo que podamos
//Modularidad: Capacidad de resolver un problema grande en partes
//Encapsulamiento: Consiste en hacer que todos los datos esten privados
/*Polimorfismo: Consiste en ver como un objeto se comporta de distinta 
  manera ante el mismo metodo*/

//-------------------OTROS CONCEPTOS DE POO-----------------------------
//Estas caracteristicas si cuentan con palabras reservadas
//Herencia
//Métodos Estáticos:
//Métodos Accesores (Getters, Setters)
/* Los metodos getters son para obtener un valor y los setters para modificar
ese valor */

class Animal {
  /*La abstraccion se aplica al ser concisos en la informacion que se 
    pide, como en este caso que se pide especie, edad y color*/
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.plural = "años";
    if (edad == 1) {
      this.plural = "año";
    } else {
      this.plural = "años";
    }
    this.inf = `Hola soy ${this.especie}, tengo ${this.edad} ${this.plural} de edad y soy de 
      color ${this.color}.<br/>`;
  }
  verInformacion() {
    document.write(this.inf);
  }
}
/*Herencia, es tomar las propiedades y funcionalidades de una clase y
agregarle nuevas propiedades o funciones*/
class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    //En este constructor heredamos l, razaos parametros de la clase animal
    super(especie, edad, color);
    this.raza = null;
  }
  //Getters and setters
  /*Esta es una forma sin embargo la manera correcta es con getters and setters
  modificarPerro(){
    this.raza="pedro<br/>";
  }
  */
  set setRaza(nuevoNombre) {
    this.raza = nuevoNombre;
  }
  get getRaza() {
    return this.raza;
  }

  //Metodo static
  // static ladrar (){
  //   alert("¡WAW!");
  // }
}
//Los objetos se definen con const
const perro = new Perro("Perro", "2", "verde", "PitBull");
const ave = new Animal("ave", "2", "verde");
const gato = new Animal("gato", 1, "blanco");

perro.setRaza = "Pedro";
document.write(perro.getRaza);
// ave.verInformacion();
// gato.verInformacion();
