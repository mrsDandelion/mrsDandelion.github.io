import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_value){

    const letter_from_player = document.querySelector(".form_dictionary input[type = 'text']").value.toLowerCase();;
    check_result_tasks([right_value, letter_from_player, 20]);
}
