/*Los objetos tienen 2 cualidades las de tener propiedades y tener metodos
-Una clase es una fabrica de objetos
-Objeto es el resultado de estas clases
-El atributo son las propiedades que tiene nuestra clase
-El metodo son las cosas que puede hacer nuestro objeto
-El Constructor es una particularidad que tienen las clases que es una 
funcion obligatoria
-Una vez que finaliza todo se puede decir que la clase esta instanceada.
*/
//Creando la primer class
class animal {
  /*dentro del parentesis pasamos los parametros*/
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
  /*Si una funcion se crea dentro de la clase se le conoce como metodo
  ya que esta enlazada a un objeto*/
  //Las funciones flecha no se deben usar como metodos por ellos usamos
  //funciones normales o a la "antugua"
  verInformacion(){
    document.write(this.inf);
  };
}
let perro = new animal("perro", "5", "marron");
let ave = new animal("ave", "2", "verde");
let gato = new animal("gato", "1", "blanco");

perro.verInformacion();
ave.verInformacion();
gato.verInformacion();

// document.write(perro.inf);
