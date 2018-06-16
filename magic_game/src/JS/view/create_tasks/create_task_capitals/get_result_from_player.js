import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_capital){
    const capital_from_player = document.querySelector("input[name = 'capitals']:checked").value;
    check_result_tasks([right_capital, capital_from_player, 20]);
}
