document.write("<h1> Almacenamiento local</h1>");

//creacion de cookies
document.cookie = "nombreUsuario = Marta ; expires= Fri ,26 nov 2022 23:59:59 UTC; secure";


//creacion de localStorage
let listaAsignaturas = ["DAW", "DIW", "DWES", "DWEC"];
localStorage.setItem("listaAsignaturas", listaAsignaturas);

//creacion de sessionStorage
let fecha = Date.now();
let fechaActual = new Date(fecha);

sessionStorage.setItem("fecha", fechaActual);





//Consulta de cookies
let lecturaCookie = document.cookie;
document.write("La cookie leida es " + lecturaCookie + "<br>");

//Consulta de localStorage
let lecturaLocalStorage = localStorage.getItem("listaAsignaturas");
document.write("LocalStorage leida es " + lecturaLocalStorage + "<br>");

//Consulta de sessionStorage
let lecturaSessionStorage = sessionStorage.getItem("fecha"); // Se almacena el sessionStorage con nombre edad
document.write("SessionStorage leido es " + lecturaSessionStorage);