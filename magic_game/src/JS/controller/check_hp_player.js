import {create_top_player} from "../controller/create_top_player.js";
import {create_form_about_player} from "../view/create_form_about_player";
export function check_hp_player(){
    const current_player = JSON.parse(localStorage.getItem("current_player_magic-game"));
    if (current_player.hp <= 30){
        const hp_player = document.getElementById("hp_player");
        hp_player.classList.add("low_level_hp_player");
    }
    if (current_player.hp <= 0){
        create_form_about_player();
        create_top_player();
    }
}