document.write("<h1> Declaracion de variables en JavaScript</h1><h2> Declacion de variables</h2>");

/*Declaracion de variables */
var texto = "es una variable de texto"; /*Tipo texto */
var num = 20; /*Tipo numerico */
var bool = true; /*Tipo boleanas */
var lista = ["Marta", "Sergio", "Mateo"]; /*Tipo lista */

/* Muestra el valor de las variables */
document.write("la variable de texto contiene:  " + texto + "<br>");
document.write("la variable numerica contiene:  " + num + "<br>");
document.write("la variable boleana contiene:  " + bool + "<br>");
document.write("la variable de lista  contiene:  ");

/*Recorre la lista */
lista.forEach(element => {
    document.write(element + "  ");

});

document.write("<hr>");

document.write("<h2> Variables let, var y const</h2>");

document.write("<h3> Variable let</h3>");

let s = 1;
document.write("variable global s= " + s + "<br>");

function le() {
    document.write("s = " + s + "  dentro de la funcion ya que obtiene el valor de la variable s global" + "<br>");

    if (true) {
        let s = 10;
        document.write("variable local de la funcion le s= " + s + "<br>");

    }
    document.write("variable fuera de la funcion le s= " + s + "<br>" + "<br>");
}

le();




document.write("<h3> Variable var</h3>");
var m = 1;
document.write("variable global m= " + m + "<br>");

function l() {
    document.write(m + "  ya que la variable m dentro de la funcion no esta declarada todavia" + "<br>");

    var m = 10;
    document.write("variable local de la funcion l m= " + m + "<br>");

}

l();
document.write("variable tras ejecutar la funcion l m= " + m + "<br>" + "<br>");



document.write("<h3> Variable const</h3>");
const numero = 60;
/*numero = numero + 2; -> no se va a ejecutar ya que las variables const no pueden modificar su valor*/
document.write("La variable const numero es igual a  " + numero);


