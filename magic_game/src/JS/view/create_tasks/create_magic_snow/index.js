import template from "./index.html";
import "./style.css";
export function create_magic_snow(){
    const wrapper_snow = document.getElementById("wrapper_screen_task");
    wrapper_snow.classList.add("wrapper_snow");
    const audio = document.createElement("audio");
    audio.setAttribute("src","audio/snow.mp3");
    audio.setAttribute("autoplay","");
    wrapper_snow.appendChild(audio);

    const start = Date.now();
    const wrapper_monster = document.querySelector(".wrapper_monster");
    const wrapper_game = document.getElementById("wrapper_game");

    const timer = setInterval(()=>{
        const timePassed = Date.now() - start;
        set_background_position(timePassed);
        if (timePassed >= 6000) {
            clearInterval(timer);        
            const snowball = document.getElementById("snowball");
            snowball.remove();
            wrapper_snow.remove();
            wrapper_monster.classList.remove("fadeInRight");
            return;
        }
        if (timePassed >= 3000 && timePassed < 3020){
            const snowball = document.createElement("div");
            snowball.innerHTML = template;
            snowball.classList.add("snowball");
            snowball.id = "snowball";            
            wrapper_game.appendChild(snowball);    
        }        
    },20);

    function set_background_position(timePassed){
        let position = timePassed / 5;
        wrapper_snow.style.backgroundPositionY = `${position}px`;
    }
}