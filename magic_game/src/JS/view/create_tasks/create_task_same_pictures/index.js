import arr_same_pictures from "../../../constans/arr_same_pictures.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_same_picture(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * (arr_same_pictures.same_pictures.length-1));
    const picture_for_player = arr_same_pictures.same_pictures[number_position][0];
    const right_value = arr_same_pictures.same_pictures[number_position][1];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_same_pictures");

    const wrapper_same_pictures = document.createElement("div");
    wrapper_same_pictures.classList.add("wrapper_same_pictures");
    
    const img = document.createElement("img");
    img.setAttribute("src",`images/task_same_picture/${picture_for_player}`);
    wrapper_same_pictures.appendChild(img);

    const wrapper_inputs = document.createElement("p");
    const first_input = document.createElement("input");
    first_input.setAttribute("type","number");
    first_input.setAttribute("maxlength","2");

    const second_input = document.createElement("input");
    second_input.setAttribute("type","number");
    second_input.setAttribute("maxlength","2");
    wrapper_inputs.appendChild(first_input);
    wrapper_inputs.appendChild(second_input);
    wrapper_same_pictures.appendChild(wrapper_inputs);

    submit_result.insertAdjacentElement("beforeBegin",wrapper_same_pictures)
    submit_result.addEventListener("click",get_result_from_player.bind(this,right_value));
}
