/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */

import cuentaRegresiva from "./dom/cuenta_regresiva.js";
import hamburguesaMenu from "./dom/menu_hamburguesa.js";
import {digitalClock,Alarm} from "./dom/reloj.js";
import { shortcuts,moveBall } from "./dom/teclado.js";

const d= document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburguesaMenu(".panel-btn", ".panel",".menu a");
    digitalClock("#reloj","#iniciar-reloj","#detener-reloj");
    Alarm("./assets/alarma.mp3","#iniciar-alarma","#detener-alarma");
    cuentaRegresiva("cuenta","March 11, 2022 11:24:00", "Feliz cumple a mi solito 😥","gatito","#btn_gatito")
});

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})

