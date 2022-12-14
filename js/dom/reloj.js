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

export function Alarm(sound,btnini,btnstop){

    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src= sound;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnini)){
            alarmTempo= setTimeout(()=>{
                $alarm.play();
            },1000);

        e.target.disabled=true;
        }

        if(e.target.matches(btnstop)){
            $alarm.pause();
            $alarm.currentTime =0;
            d.querySelector(btnini).disabled= false;
        }
        
    })
};