import arr_questions from "../../../constans/arr_questions.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_questions(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * (arr_questions.questions.length-1));

    const current_arr = arr_questions.questions[number_position];
    const right_position = current_arr[4];
    const wrapper_labels = document.createElement("div");
    const question = document.createElement("p");
    question.textContent = current_arr[0];
    wrapper_labels.appendChild(question);

    for(let i = 1; i < 4; i++){
        const label = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        input.setAttribute("type","radio");
        input.setAttribute("name","questions");
        input.setAttribute("value",i);
        input.id = i;
        if(i === 1){
            input.setAttribute("checked","");
        }
        label.textContent = current_arr[i];
        label.setAttribute("for",i);
        p.appendChild(input);
        p.appendChild(label);
        wrapper_labels.appendChild(p);
    }
    wrapper_screen_task.innerHTML = template;
    const submit_result_questions = document.getElementById("submit_result_questions");    
    submit_result_questions.insertAdjacentElement("beforeBegin",wrapper_labels);
    submit_result_questions.addEventListener("click",get_result_from_player.bind(this,right_position,current_arr));
}
