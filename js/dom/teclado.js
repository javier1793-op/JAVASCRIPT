/* **********     Curso JavaScript: 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */
 const d= document;
 
 export function shortcuts(e){

  /*  console.log(e);
    console.log(e.type);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.key);
*/

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta de teclado");
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion de teclado");
    }

    if (e.key === "p" && e.ctrlKey){
        prompt ("Haz lanzado un aviso con el teclado y ctrl");
    }
 }