import {decrease_hp_player} from "./../../decrease_hp_player.js";
import template from "./index.html";
export function create_blow_of_monster(amount){
    const wrapper_view_loss = document.getElementById("wrapper_view_loss");
    wrapper_view_loss.remove();
    const wrapper_blow = document.createElement("div");
    wrapper_blow.classList.add("wrapper_blow");
    wrapper_blow.innerHTML = template;

    const wrapper_game = document.getElementById("wrapper_game");
    wrapper_game.appendChild(wrapper_blow);
    setTimeout(() => {
        wrapper_blow.remove();
    }, 5000);    
}