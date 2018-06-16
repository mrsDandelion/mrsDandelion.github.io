import {choose_task} from "./choose_task.js";
import {create_screen_task} from "../view/create_tasks/create_screen_task.js";
export function check_selected_spell(){
    const selected_spell = document.querySelector("input[type = 'radio']:checked").value;
    
    if(selected_spell === "rain_spell"){
        create_screen_task("rain_spell");
        setTimeout(() => { 
            choose_task();     
        }, 1000);        
    }
    if(selected_spell === "snow_spell"){
        create_screen_task("snow_spell");
        setTimeout(() => { 
            choose_task();     
        }, 1000);        
    }
}