import {create_task_arithmetic} from "../../../controller/create_task_arithmetic.js";
import "./style.css";
import {get_result_from_player_arith} from "./get_result_from_player_arith.js";

export function create_form_of_task_arith(){
    
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const arr_result = create_task_arithmetic();

    wrapper_screen_task.innerHTML = `
    <form class = "form_task_arith fadeInDown">
        <p>Напиши результат</p>
        <p>${arr_result[0]} = <input type = "number" value = "0"></p>
        <input type = "submit" id = "submit_result_arith">
    </form>
    `;
    const submit_result_arith = document.getElementById("submit_result_arith");
    submit_result_arith.addEventListener("click",get_result_from_player_arith.bind(this,arr_result[1]));   
    
}