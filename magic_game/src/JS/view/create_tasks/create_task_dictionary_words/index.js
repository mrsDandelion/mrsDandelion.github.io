import arr_dictionary from "../../../constans/arr_dictionary_words.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_dictionary_words(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.floor(Math.random() * arr_dictionary.dictionary.length);
    const letters_before = arr_dictionary.dictionary[number_position][0];
    const letters_after = arr_dictionary.dictionary[number_position][1];
    const right_value = arr_dictionary.dictionary[number_position][2];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_dictionary");

    const wrapper_word = document.createElement("div");
    wrapper_word.classList.add("wrapper_dictionary");
    
    const span_before = document.createElement("span");
    span_before.textContent = letters_before;
    wrapper_word.appendChild(span_before);

    const input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("maxlength","1");
    wrapper_word.appendChild(input);

    const span_after = document.createElement("span");
    span_after.textContent = letters_after;
    wrapper_word.appendChild(span_after);

    submit_result.insertAdjacentElement("beforeBegin",wrapper_word)
    submit_result.addEventListener("click",get_result_from_player.bind(this,right_value));
}
