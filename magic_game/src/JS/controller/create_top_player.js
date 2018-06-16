import {create_bubble_sort_for_top} from "../controller/create_bubble_sort_for_top.js";
import {create_screen_top_of_players} from "../view/create_screen_top_of_players";

export function create_top_player(){	
    const amount_players = localStorage.getItem('amount_of_saved_player');
    const arr_top_of_player = [];
    for(let i = 1; i <= amount_players; i++){
        const current_player = JSON.parse(localStorage.getItem(`${i}_player_game`));
        arr_top_of_player.push(current_player);
    }
    create_bubble_sort_for_top(arr_top_of_player);

    create_screen_top_of_players(arr_top_of_player);
}