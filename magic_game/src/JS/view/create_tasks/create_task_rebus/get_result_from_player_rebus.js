import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player_rebus(translate_of_rebus){
    const word_from_player = document.getElementById("rebus_from_player").value.toLowerCase();
    check_result_tasks([translate_of_rebus, word_from_player, 25]);
}
