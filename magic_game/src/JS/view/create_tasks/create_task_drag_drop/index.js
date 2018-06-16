import {arr_words} from "../../../constans/arr_words_for_drag&drop";
import template from "./index.html";
import "./style.css";
import {get_result_from_player_drag} from "./get_result_from_player_drag.js";
import {create_drag_drops} from "./create_drag_drops";

export function create_task_drag_drop(){
    
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.floor(Math.random() * arr_words.length);
    const word_for_player = arr_words[number_position];

    const arr_of_letters = word_for_player.split("");
    wrapper_screen_task.innerHTML = template;

    const form_task = document.getElementById("form_task_drag-drop");
    const submit_result = document.getElementById("submit_result_drag-drop");

    const wrapper_word = document.createElement("div");
    wrapper_word.classList.add("wrapper_word");
    wrapper_word.id = "wrapper_word";

    const length = arr_of_letters.length;

    for(let i = 0; i < length; i++){
        const wrapper_letter = document.createElement("div");
        wrapper_letter.classList.add("letter");
        const number_position =  Math.floor(Math.random() * arr_of_letters.length);
        wrapper_letter.setAttribute("data-letter", arr_of_letters[number_position]);
        
        wrapper_letter.textContent = arr_of_letters[number_position];
        arr_of_letters.splice(number_position,1);
        wrapper_word.appendChild(wrapper_letter);
    }
    form_task.addEventListener("mousedown",create_drag_drops);
    form_task.insertBefore(wrapper_word,submit_result);

    submit_result.addEventListener("click",get_result_from_player_drag.bind(this,word_for_player));       
}