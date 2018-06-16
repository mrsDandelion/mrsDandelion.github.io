import arr_add_letters from "../../../constans/arr_add_letters.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_add_letters(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.floor(Math.random() * arr_add_letters.add_letters.length);

    const empty_before = arr_add_letters.add_letters[number_position][0];
    const letters = arr_add_letters.add_letters[number_position][1];
    const empty_after = arr_add_letters.add_letters[number_position][2];
    const question = arr_add_letters.add_letters[number_position][3];
    const right_value = arr_add_letters.add_letters[number_position][4];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_add_letters");

    const wrapper_word = document.createElement("div");
    wrapper_word.classList.add("wrapper_word");
    for(let i = 0; i < empty_before; i++){
        const input = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("maxlength","1");
        wrapper_word.appendChild(input);
    }
    const span_letters = document.createElement("span");
    span_letters.textContent = letters;
    wrapper_word.appendChild(span_letters);
    for(let i = 0; i < empty_after; i++){
        const input = document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("maxlength","1");
        wrapper_word.appendChild(input);
    }

    const p_question = document.createElement("p");
    p_question.textContent = question;
    submit_result.insertAdjacentElement("beforeBegin",p_question)
    submit_result.insertAdjacentElement("beforeBegin",wrapper_word)
    submit_result.addEventListener("click",get_result_from_player.bind(this,right_value,empty_before,letters,empty_after));
}
