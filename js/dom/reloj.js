/* **********     Curso JavaScript: 82. DOM: Ejercicios Prácticos | Reloj Digital - #jonmircha     ********** */
const d= document;

export function digitalClock(clock,btnini,btnstop){
 
let clockTempo;    
    d.addEventListener("click", (e)=>{
    if(e.target.matches(btnini)){
        clockTempo= setInterval(()=>{
            let clockHour= new Date().toLocaleTimeString();
            d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
        },1000);
        e.target.disabled=true;
    }
    
    if(e.target.matches(btnstop)){
        clearInterval(clockTempo);
        d.querySelector(clock).innerHTML= null;
        d.querySelector(btnini).disabled=false;
    }
 })
};

export function Alarm(){

};