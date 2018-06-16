import arr_accent_words from "../../../constans/arr_accent_words.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_accent(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * (arr_accent_words.accent.length-1));

    const word_for_player = arr_accent_words.accent[number_position][0];
    const right_value = arr_accent_words.accent[number_position][1];

    const wrapper_labels = document.createElement("div");
    wrapper_labels.classList.add("wrapper_accent_words");

    for(let i = 0; i < word_for_player.length; i++){
        const label = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        input.setAttribute("type","radio");
        input.setAttribute("name","accent_words");
        input.setAttribute("value",i);
        input.id = i;
        if(i === 0){
            input.setAttribute("checked","");
        }
        label.textContent = word_for_player[i];
        label.setAttribute("for",i);
        p.appendChild(input);
        p.appendChild(label);
        wrapper_labels.appendChild(p);
    }
    wrapper_screen_task.innerHTML = template;
    const submit_result_accent_words = document.getElementById("submit_result_accent_words");    
    submit_result_accent_words.insertAdjacentElement("beforeBegin",wrapper_labels);
    submit_result_accent_words.addEventListener("click",get_result_from_player.bind(this,right_value, word_for_player));
}
/*{
    "accent":
    [
        ["искра","Искра"],
        ["кружева","кружевА"],
        ["фетиш","фетИш"],
        ["жалюзи","жалюзИ"],
        ["баловать","баловАть"],
        ["алкоголь","алкогОль"],
        ["добела","добелА"],
        ["знахарка","знАхарка"],
        ["зубчатый","зубчАтый"]
    ]
} */