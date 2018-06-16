import arr_sequence from "../../../constans/arr_sequence.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_sequence(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * (arr_sequence.sequence.length - 1));
    const sequence_for_player = arr_sequence.sequence[number_position][0];
    const right_value = arr_sequence.sequence[number_position][1];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_sequence");

    const wrapper_sequence = document.createElement("div");
    wrapper_sequence.classList.add("wrapper_sequence");
    
    const p_sequence = document.createElement("p");
    p_sequence.textContent = sequence_for_player;
    wrapper_sequence.appendChild(p_sequence);

    const input = document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("maxlength","2");
    wrapper_sequence.appendChild(input);

    submit_result.insertAdjacentElement("beforeBegin",wrapper_sequence)
    submit_result.addEventListener("click",get_result_from_player.bind(this,right_value));
}
/*{
    "sequence":
    [
        ["3,6,9,12,15","18"],
        ["2,4,6,8,10","12"],
        ["1,3,5,7,11,13","17"],
        ["2,4,6,8,10","12"],
        ["4,8,12,16","20"],
        ["2,1,2,3,2,5,2,7","2"]
    ]
} */