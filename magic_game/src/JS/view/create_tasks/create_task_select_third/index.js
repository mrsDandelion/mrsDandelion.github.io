import arr_select_third from "../../../constans/arr_select_third.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_select_third(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.floor(Math.random() * arr_select_third.select_third.length);

    const current_arr = arr_select_third.select_third[number_position];
    const right_position = current_arr[3];
    const wrapper_labels = document.createElement("div");

    for(let i = 0; i < 3; i++){
        const label = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        input.setAttribute("type","radio");
        input.setAttribute("name","select_third");
        input.setAttribute("value",current_arr[i]);
        input.id = current_arr[i];
        if(i === 0){
            input.setAttribute("checked","");
        }
        label.textContent = current_arr[i];
        label.setAttribute("for",current_arr[i]);
        p.appendChild(input);
        p.appendChild(label);
        wrapper_labels.appendChild(p);
    }
    wrapper_screen_task.innerHTML = template;
    const submit_result_select_third = document.getElementById("submit_result_select_third");    
    submit_result_select_third.insertAdjacentElement("beforeBegin",wrapper_labels);
    submit_result_select_third.addEventListener("click",get_result_from_player.bind(this,right_position));
}
