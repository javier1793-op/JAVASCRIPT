/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */
export default function hamburguesaMenu(panelbtn,panel,menuLink){
 const d= document

 d.addEventListener("click", (e) =>{
    if(e.target.matches(panelbtn) || (e.target.matches(`${panelbtn} *`))){
      d.querySelector(panel).classList.toggle("is-active");  
      d.querySelector(panelbtn).classList.toggle("is-active");  
    }

    if(e.target.matches(menuLink)){
        d.querySelector(panel).classList.remove("is-active");  
        d.querySelector(panelbtn).classList.remove("is-active");  
    }
 });
}