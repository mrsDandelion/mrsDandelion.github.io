import {check_result_tasks} from "../../../controller/check_result_tasks.js";
export function get_result_from_player_drag(true_value){    
    
    const info_about_letters = get_position_letters();
    const sort_arr = create_bubble_sort(info_about_letters);
    let word_from_player = "";
    for(let i = 0; i < sort_arr.length; i++){
        word_from_player += sort_arr[i][0];
    }
    check_result_tasks([true_value, word_from_player, 20]);

    function get_position_letters(){
        const arr_letters = [];
        const wrapper_word = document.getElementById("wrapper_word");
        for(let i = 0; i < true_value.length; i++){
            const arr_letter = [];
            const current_letter = wrapper_word.childNodes[i];
            arr_letter.push(current_letter.getAttribute("data-letter")); 
            arr_letter.push(current_letter.getBoundingClientRect().left);
            arr_letters.push(arr_letter); 
        }
        return arr_letters;
    }
    function create_bubble_sort(array){
        const length = array.length;
        for (let i = 0; i < length-1; i++){ 
            for (let j = 0; j < length-1-i; j++){
                if (parseInt(array[j+1][1],10) < parseInt(array[j][1])){ 
                    const temp = array[j+1];
                    array[j+1] = array[j]; 
                    array[j] = temp; 
                }
            }
    } 
    return array; 
    }
}