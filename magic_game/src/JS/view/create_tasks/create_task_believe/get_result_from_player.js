import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player(right_answer){
    let answer_from_player = document.querySelector("input[name = 'believe']:checked").value;    
    if(right_answer === "yes"){
        right_answer = "Верно"; 
    }else{
        right_answer = "Неверно"; 
    }
    if(answer_from_player === "yes"){
        answer_from_player = "Верно"; 
    }else{
        answer_from_player = "Неверно"; 
    }
    console.log(right_answer);
    console.log(answer_from_player);
    check_result_tasks([right_answer, answer_from_player, 15]);
}
