import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_position){
    const position_from_player = document.querySelector("input[name = 'select_third']:checked").value;
    check_result_tasks([right_position, position_from_player, 20]);
}
