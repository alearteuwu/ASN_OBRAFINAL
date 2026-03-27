console.log("JS Iniciado");

// SELECCIONA TODOS LOS ELEMENTOS HTML CON CLASE .eng
let ingles = document.querySelectorAll(".ENG");
// LES AÑADE LA CLASE .oculta
ingles.forEach(elemento => 
    elemento.classList.add("oculta")
);
// SELECCIONA TODOS LOS ELEMENTOS HTML CON CLASE .cast
let cast = document.querySelectorAll(".ESP");

function cambiaOculta(muestra, oculta) {
    // LES AÑADE LA CLASE .oculta
    oculta.forEach(elemento => 
        elemento.classList.add("oculta")
    );  
    // LES QUITA LA CLASE .oculta
    muestra.forEach(elemento => 
        elemento.classList.remove("oculta")
    );  
}

// SELECCIONA LA IMAGEN BANDERA ESP.
let IconoESP = document.querySelector("#IconoESP");
IconoESP.addEventListener("click", () => {
    cambiaOculta(cast, ingles);
});
// SELECCIONA LA IMAGEN BANDERA ING.
let IconoENG = document.querySelector("#IconoENG");
IconoENG.addEventListener("click", () => {
    cambiaOculta(ingles, cast);
});
