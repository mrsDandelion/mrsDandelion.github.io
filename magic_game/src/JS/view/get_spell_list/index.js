import {check_selected_spell} from "../../controller/check_selected_spell.js";
import template from "./index.html";
import "./style.css";
export function get_spell_list(){
    const wrapper_battle = document.createElement("div");
    wrapper_battle.classList.add("spell_list");
    wrapper_battle.id = "spell_list";
    wrapper_battle.classList.add("fadeInDown");

    wrapper_battle.innerHTML = template;  
    const wrapper_game = document.getElementById("wrapper_game");  
    
    wrapper_game.appendChild(wrapper_battle);
    
    const button_select_spell = document.getElementById("select_spell");
    button_select_spell.addEventListener("click",check_selected_spell);
}