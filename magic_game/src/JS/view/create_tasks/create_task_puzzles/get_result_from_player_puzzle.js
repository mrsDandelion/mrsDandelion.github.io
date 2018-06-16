import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player_puzzle(answer_of_puzzl){
    const word_from_player = document.getElementById("word_from_player").value.toLowerCase();
    let true_value;
    if(answer_of_puzzl.some(word => word === word_from_player)){
        true_value = word_from_player;
    }else{
        true_value = answer_of_puzzl[0];
    };
    check_result_tasks([true_value, word_from_player, 30]);
}
