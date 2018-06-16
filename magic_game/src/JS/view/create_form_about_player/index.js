import template from "./index.html";
import "./style.css";
import {start_game} from "./../../controller/start_game";
import {create_top_player} from "../../controller/create_top_player";
export function create_form_about_player(){        
    const wrapper_game = document.getElementById('wrapper_game');

    wrapper_game.innerHTML = template;

    const button_start = document.getElementById('button_start');  
    button_start.addEventListener('click',start_game);

    const button_top = document.getElementById('button_top_of_players');  
    button_top.addEventListener('click',create_top_player);
}    
