import arr_capitals from "../../../constans/arr_capitals.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_capitals(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.floor(Math.random() * arr_capitals.capitals.length);

    const current_arr = arr_capitals.capitals[number_position];
    const right_capital = current_arr[2];
    const wrapper_labels = document.createElement("div");
    const question = document.createElement("p");
    question.textContent = `Укажи столицу ${current_arr[0]}`;
    wrapper_labels.appendChild(question);

    for(let i = 0; i < current_arr[1].length; i++){
        const label = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        input.setAttribute("type","radio");
        input.setAttribute("name","capitals");
        input.setAttribute("value",current_arr[1][i]);
        input.id = current_arr[1][i];
        if(i === 0){
            input.setAttribute("checked","");
        }
        label.textContent = current_arr[1][i];
        label.setAttribute("for",current_arr[1][i]);
        p.appendChild(input);
        p.appendChild(label);
        wrapper_labels.appendChild(p);
    }
    wrapper_screen_task.innerHTML = template;
    const submit_result_capitals = document.getElementById("submit_result_capital");    
    submit_result_capitals.insertAdjacentElement("beforeBegin",wrapper_labels);
    submit_result_capitals.addEventListener("click",get_result_from_player.bind(this,right_capital));
}
