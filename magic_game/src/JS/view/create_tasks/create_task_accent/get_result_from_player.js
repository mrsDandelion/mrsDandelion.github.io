import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_value, word_for_player){
    const accent_from_player = document.querySelector("input[name = 'accent_words']:checked").value;

    const result_from_player = word_for_player.substring(0,accent_from_player) + word_for_player[accent_from_player].toUpperCase() + word_for_player.substring(+accent_from_player + 1);
    console.log(result_from_player);
    check_result_tasks([right_value, result_from_player, 20]);
}
