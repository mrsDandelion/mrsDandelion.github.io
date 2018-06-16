import {create_view_win} from "../view/create_tasks/create_view_win";
import {dilution_screen_task} from "../view/create_tasks/dilution_screen_task";
import {create_magic_rain} from "../view/create_tasks/create_magic_rain";
import {create_magic_snow} from "../view/create_tasks/create_magic_snow";
import {decrease_hp_monster} from "../view/decrease_hp_monster";
import {create_blow_of_monster} from "../view/create_tasks/create_blow_of_monster";
import {create_view_loss} from "../view/create_tasks/create_view_loss";
import {decrease_hp_player} from "../view/decrease_hp_player";
import {check_hp_monster} from "../controller/check_hp_monster";
import {check_hp_player} from "../controller/check_hp_player";
import {save_info_about_battle} from "../controller/save_info_about_battle";
export function check_result_tasks(result){    
    if(result[0] === result[1]){
        let promise = new Promise((resolve, reject) => {       
            create_view_win();
            setTimeout(() => {
                resolve();
            },3000)            
        });
        promise.then(() => {
            const wrapper_view_win = document.getElementById("wrapper_view_win");
            wrapper_view_win.classList.add("animation_opacity");
            setTimeout(() => {
                wrapper_view_win.remove();
                return;
            },1000)             
        })
        .then(() => {
            const current_monster = JSON.parse(localStorage.getItem("current_monster_magic-game"));
            current_monster.hp = current_monster.hp - result[2];
            localStorage.setItem("current_monster_magic-game",JSON.stringify(current_monster));            
            return;
        })
        .then(() => {
            if(document.getElementById("wrapper_screen_task").classList.contains("rain_spell")){
                create_magic_rain();
            }else{
                create_magic_snow();
            }             
            setTimeout(() => {
                decrease_hp_monster(result[2]);
                check_hp_monster();    
                save_info_about_battle();
            },6000)             
        })
    }
    else{
        let promise = new Promise((resolve, reject) => {
            const current_player = JSON.parse(localStorage.getItem("current_player_magic-game"));
            current_player.hp = current_player.hp - result[2]/2;
            localStorage.setItem("current_player_magic-game",JSON.stringify(current_player));
            create_view_loss(result[0]);
            setTimeout(() => {
                resolve();
            },5000)  
        })
        promise.then(()=>{
            create_blow_of_monster();  
            setTimeout(() => {
                decrease_hp_player(result[2]/2);
                check_hp_player();
            },5000)  
        })              
    }
}