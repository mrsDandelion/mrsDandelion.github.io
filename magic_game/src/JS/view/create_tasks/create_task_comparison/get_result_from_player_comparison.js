import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player_comparison(comparison_of_value){
    const value_from_player = document.getElementById("value_from_player").value;
    check_result_tasks([comparison_of_value, value_from_player, 15]);   
}
