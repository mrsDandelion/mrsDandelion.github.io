import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player_arith(true_value){
    const value_from_player = document.querySelector("form input[type = 'number']").value;
    
    check_result_tasks([true_value, +value_from_player, 20]);
}