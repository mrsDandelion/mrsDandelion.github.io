import arr_rebus from "../../../constans/arr_rebus.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player_rebus} from "./get_result_from_player_rebus.js"
export function create_task_rebus(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * arr_rebus.rebus.length);

    const rebus_for_player = arr_rebus.rebus[number_position][0];
    const translate_of_rebus = arr_rebus.rebus[number_position][1];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_rebus");
    const wrapper_rebus = document.getElementById("rebus");
    const rebus = document.createElement("img");
    rebus.setAttribute("src",`images/rebus/${rebus_for_player}`);
    wrapper_rebus.appendChild(rebus);
    submit_result.addEventListener("click",get_result_from_player_rebus.bind(this,translate_of_rebus));
}
