import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_value){
    const number_from_player_1 = document.querySelectorAll(".form_same_pictures input[type = 'number']")[0].value;
    const number_from_player_2 = document.querySelectorAll(".form_same_pictures input[type = 'number']")[1].value;
    let result_from_player;
    if(+number_from_player_1 > +number_from_player_2){
        result_from_player = `${number_from_player_2},${number_from_player_1}`;
    }else{
        result_from_player = `${number_from_player_1},${number_from_player_2}`;
    }
    check_result_tasks([right_value.join(), result_from_player, 25]);
}
