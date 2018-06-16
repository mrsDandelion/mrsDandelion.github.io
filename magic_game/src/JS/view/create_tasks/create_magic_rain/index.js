import "./style.css";
import template from "./index.html";
export function create_magic_rain(){
    const wrapper_rain = document.getElementById("wrapper_screen_task");
    wrapper_rain.classList.add("wrapper_rain");

    wrapper_rain.innerHTML = template;

    const start = Date.now();
    const wrapper_monster = document.querySelector(".wrapper_monster");

    const timer = setInterval(()=>{
    const timePassed = Date.now() - start;

    if (timePassed >= 6000) {
        clearInterval(timer);
        wrapper_rain.remove();
        wrapper_monster.classList.remove("lightning");
        wrapper_monster.classList.remove("fadeInRight");
        return;
    }
    if (timePassed >= 3000) {        
        wrapper_monster.classList.add("lightning");
    }
    
    set_background_position(timePassed);
    },20);

    function set_background_position(timePassed){
        let position = timePassed / 5;
        wrapper_rain.style.backgroundPosition = `-${position}px ${position}px`;
    }
}