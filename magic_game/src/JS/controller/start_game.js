import {player} from "../classes/class_create_player.js"
import {create_wrapper_player} from "../view/create_wrapper_player.js";
import {create_wrapper_monster} from "../view/create_wrapper_monster.js";
import {create_button_battle} from "../view/create_button_battle.js";

export function start_game(){
    const form_about_player = document.getElementById("form_about_player");
    form_about_player.classList.add("fall_form");

    setTimeout(()=>{        
        const name_player = document.querySelector('input[type="text"]').value;
        const sex_of_player = document.querySelector('input[type="radio"]:checked').value;
        
        let current_player = new player(name_player, sex_of_player);
        current_player.create_id_player();
        current_player.check_name_player();
        current_player.save_info_about_player();        

        localStorage.setItem("current_player_magic-game",JSON.stringify(current_player));
        create_wrapper_player(current_player);                
        create_wrapper_monster();
        create_button_battle();
    },1000)
}