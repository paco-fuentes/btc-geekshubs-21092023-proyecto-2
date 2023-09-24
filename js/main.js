console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("щ（ﾟДﾟщ） < “Dear god why‽ "); // Funciona consola
console.log("Descomenta para comprobar la consola");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");


/* ------------ Código David Mod ---------------- */


let pantalla = document.getElementById("actionScreen");



document.addEventListener("click", (e) => {
    
    let lastState;
    let stateOn;

    if (e.target.id === 'actionA') {

        // pantalla.style.backgroundColor = "red";
        pantalla.style.backgroundImage = "url('img/kawai.jpg')";

    } else if (e.target.id === 'actionB') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('img/bear.jpg')";

    } else if (e.target.id === 'actionStart') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('img/original.jpg')";

    } else if (stateOn == false && e.target.id === 'onOff') {

        lastState = false;
        stateOn = true;

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('img/images.jpeg')";

    } else if (lastState == false && e.target.id === 'onOff') {

        lastState = true
        stateOn = false;

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('img/10193.png')";

    };

    console.log(stateOn);
    console.log(lastState);
    

});



/* -------------FIN CODIGO DAVID MOD----------------- */


/////QUIZÁ SEA POSIBLE HACER UN SWITCH PAR ACAMBIAR DE ESTADO Y USARLO PARA EL ON / OFF