console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("щ（ﾟДﾟщ） < “Dear god why‽ "); // Funciona consola
console.log("Descomenta para comprobar la consola");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");


/* ------------ Código David Mod ---------------- */


let pantalla = document.getElementById("actionScreen");


let lastState = true;
let stateOn = false;

document.addEventListener("click", (e) => {

    if (stateOn != lastState) {
        stateOn = lastState;
    }

    if (e.target.id === 'actionA') {

        // pantalla.style.backgroundColor = "red";
        pantalla.style.backgroundImage = "url('../img/a-1.png')";

    } else if (e.target.id === 'actionB') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('../img/b-1.png')";

    } else if (e.target.id === 'actionStart') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('../img/start-1.png')";

    } else if (e.target.id === 'actionSelect') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('../img/select-1.png')";

    } else if (stateOn == false && e.target.id === 'actionOnOff') {

        /* stateOn = true; */
        lastState = true;

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('../img/on-1.png')";

    } else if (stateOn == true && e.target.id === 'actionOnOff') {

        lastState = false;
        /*  stateOn = false; */

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('../img/off-1.png')";

    };

    console.log(stateOn);
    console.log(lastState);


});



/* -------------FIN CODIGO DAVID MOD----------------- */


/////QUIZÁ SEA POSIBLE HACER UN SWITCH PAR ACAMBIAR DE ESTADO Y USARLO PARA EL ON / OFF