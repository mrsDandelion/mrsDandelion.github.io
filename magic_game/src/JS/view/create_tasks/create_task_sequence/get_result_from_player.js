import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_value){
    const number_from_player = document.querySelector(".form_sequence input[type = 'number']").value;
    check_result_tasks([right_value, number_from_player, 25]);
}
