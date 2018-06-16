import {create_wrapper_monster} from "../view/create_wrapper_monster";
export function check_hp_monster(){
    const current_monster = JSON.parse(localStorage.getItem("current_monster_magic-game"));
    if (current_monster.hp <= 30){
        const hp_monster = document.getElementById("hp_monster");
        hp_monster.classList.add("low_level_hp_monster");
    }
    if (current_monster.hp <= 0){

        const current_player = JSON.parse(localStorage.getItem("current_player_magic-game"));
        current_player.amount_monster++;
        localStorage.setItem("current_player_magic-game",JSON.stringify(current_player));
        
        const wrapper_monster = document.querySelector(".wrapper_monster");
        wrapper_monster.classList.add("monster_animation_opacity");
        setTimeout(() => {
            wrapper_monster.remove();
            create_wrapper_monster();
        },1000);         
    }
}