console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");
console.log("щ（ﾟДﾟщ） < “Dear god why‽ "); // Funciona consola
console.log("Descomenta para comprobar la consola");
console.log("----------------------------------------------------------------");
console.log("----------------------------------------------------------------");


let pantalla = document.getElementById("actionScreen");


let lastState = false;
let stateOn = true;

document.addEventListener("click", (e) => {

    if (stateOn != lastState) {
        stateOn = lastState;
    }



    if (stateOn == true && e.target.id === 'actionOnOff') {

        
        lastState = false;

        ledTop.style.backgroundColor = "black";
        pantalla.style.backgroundImage = "url(../img/off-1.png)";

    };

        if (stateOn == true && e.target.id === 'actionA') {

            // pantalla.style.backgroundColor = "red";
            pantalla.style.backgroundImage = "url(../img/a-1.png)";
    
        } 
        
        if (stateOn == true && e.target.id === 'actionB') {
    
            // pantalla.style.backgroundColor = "grey";
            pantalla.style.backgroundImage = "url(../img/b-1.png)";
    
        } 
        
        if (stateOn == true && e.target.id === 'actionStart') {
    
            // pantalla.style.backgroundColor = "grey";
            pantalla.style.backgroundImage = "url(../img/start-1.png)";
    
        } 
        
        if (stateOn == true && e.target.id === 'actionSelect') {
    
            // pantalla.style.backgroundColor = "grey";
            pantalla.style.backgroundImage = "url(../img/select-1.png)";
    
        } 

    

    if (stateOn == false && e.target.id === 'actionOnOff') {

        lastState = true;

        ledTop.style.backgroundColor = "red";
        pantalla.style.backgroundImage = "url(../img/on-1.png)";

    };

    console.log(`Estado anteior: ${stateOn}`);
    console.log(`Estado actual: ${lastState}`);


});



/* -------------FIN CODIGO DAVID MOD----------------- */


/////QUIZÁ SEA POSIBLE HACER UN SWITCH PAR ACAMBIAR DE ESTADO Y USARLO PARA EL ON / OFF