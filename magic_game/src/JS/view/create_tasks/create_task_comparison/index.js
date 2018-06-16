import "./style.css";
import {create_task_arithmetic} from "../../../controller/create_task_arithmetic.js";
import {get_result_from_player_comparison} from "./get_result_from_player_comparison.js"
export function create_task_comparison(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    
    const first_value = create_task_arithmetic();
    const second_value = create_task_arithmetic();
    wrapper_screen_task.innerHTML = `
    <form class = "form_task_comparison fadeInDown" id = "form_task_comparison">
        <p id = "condition">Впиши<br> '>', '<', '='</p>
        <div class = "wrapper_values" id = "wrapper_values">
            <p>${first_value[0]}</p>
            <p><input type = "text" id = "value_from_player"></p>
            <p>${second_value[0]}</p>
        </div>
        <input type = "submit" id = "submit_result_comparison" value = "Проверить!">
    </form>
    `;
    const submit_result = document.getElementById("submit_result_comparison");
    let comparison_of_value;
    if(first_value[1] > second_value[1]){
        comparison_of_value = ">";
    } 
    if(first_value[1] < second_value[1]){
        comparison_of_value = "<";
    }
    if(first_value[1] === second_value[1]){
        comparison_of_value = "=";
    }
    submit_result.addEventListener("click",get_result_from_player_comparison.bind(this,comparison_of_value));
}



