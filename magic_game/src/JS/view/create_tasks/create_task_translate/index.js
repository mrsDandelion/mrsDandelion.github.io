import dictionary from "../../../constans/arr_words_for_translate.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player_translate} from "./get_result_from_player_translate.js"
export function create_task_translate(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * dictionary.dictionary.length);

    const word_for_player = dictionary.dictionary[number_position][0];
    const translate_of_word = dictionary.dictionary[number_position][1];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_translate");
    const translate_word = document.getElementById("translate_word");
    translate_word.textContent = word_for_player;
    submit_result.addEventListener("click",get_result_from_player_translate.bind(this,translate_of_word));
}



