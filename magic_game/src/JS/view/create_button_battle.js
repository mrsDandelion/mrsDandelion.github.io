import {get_spell_list} from "./get_spell_list";
export function create_button_battle(){
    const wrapper_button = document.createElement("div");
    wrapper_button.classList.add("wrapper_start_battle");
    
    const button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","Атаковать");
    button.classList.add("start_battle");    
    button.classList.add("fadeInDown"); 
    button.addEventListener("click",get_spell_list);

    wrapper_button.appendChild(button);
   
    const wrapper_game = document.getElementById("wrapper_game");
    wrapper_game.appendChild(wrapper_button);
}