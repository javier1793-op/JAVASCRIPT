/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */

import hamburguesaMenu from "./dom/menu_hamburguesa.js";
import {digitalClock,Alarm} from "./dom/reloj.js";

const d= document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburguesaMenu(".panel-btn", ".panel",".menu a");
    digitalClock("#reloj","#iniciar-reloj","#detener-reloj");
});

