import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_value,empty_before,letters,empty_after){

    const letters_from_players = document.querySelectorAll(".form_add_letters input[type = 'text']");
    let result_from_player = "";
    for (let i = 0; i < empty_before; i++){
        result_from_player = result_from_player + letters_from_players[i].value.toLowerCase();        
    }
    result_from_player = result_from_player + letters.toLowerCase();
    for (let i = 0; i < empty_after; i++){
        result_from_player = result_from_player + letters_from_players[i + empty_before].value.toLowerCase();
    }
    check_result_tasks([right_value, result_from_player, 25]);
}
