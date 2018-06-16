import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_position,current_arr){
    const position_from_player = document.querySelector("input[name = 'questions']:checked").value;
    check_result_tasks([current_arr[right_position], current_arr[position_from_player], 20]);
}
