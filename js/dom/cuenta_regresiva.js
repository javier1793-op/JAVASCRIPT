/* **********     Curso JavaScript: 86. DOM: Ejercicios Prácticos | Cuenta Regresiva(countdown) - #jonmircha     ********** */

const d= document;

export default function cuentaRegresiva(cuenta,fecha,mensaje,gatito,llego){

    const $id = d.getElementById(cuenta),
          $gatito = d.getElementById(gatito),  
        fecha_limite= new Date(fecha).getTime();

    let regresion = setInterval(()=>{
        let fecha_actual= new Date().getTime(),
            falta = fecha_actual - fecha_limite,
            dia = Math.floor(falta / (1000*60*60*24)),
            hora = (
             "0" + Math.floor(falta % (1000*60*60*24)/(1000*60*60))   
            ).slice(-2),
            minutos = (
                "0" + Math.floor(falta % (1000*60*60)/(1000*60))   
               ).slice(-2),
            segundos = (
                "0" + Math.floor(falta % (1000*60)/(1000))   
               ).slice(-2);     

    $id.innerHTML = `<h5 class="card-title">FALTAN</h5>
        ${dia} DIAS 
         * ${hora} HORAS <br>
         * ${minutos} MINUTOS 
         * ${segundos} SEGUNDOS * PARA MI CUMPLE`;
    
    d.addEventListener("click", e=>{
        if(e.target.matches(llego)){
             $gatito.innerHTML = ` <img src="./assets/gatitoFeliz.jpg"  class="card-img-top" alt="">`;
             clearInterval(regresion),
            $id.innerHTML = ` <h5 class="card-title">EEHHH!</h5> <h3>${mensaje}</h3>`;
         }
    
                
     });

            

    },1000)

    

}