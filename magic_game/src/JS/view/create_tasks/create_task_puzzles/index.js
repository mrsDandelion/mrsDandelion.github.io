import puzzles from "../../../constans/arr_words_for_puzzles.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player_puzzle} from "./get_result_from_player_puzzle.js"
export function create_task_puzzles(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.floor(Math.random() * puzzles.puzzles.length);

    const puzzle_for_player = puzzles.puzzles[number_position][0];
    const answer_of_puzzle = puzzles.puzzles[number_position][1];
    
    wrapper_screen_task.innerHTML = template;
    const submit_result = document.getElementById("submit_result_puzzle");
    const answer_puzzle = document.getElementById("answer_puzzle");
    answer_puzzle.textContent = puzzle_for_player;
    submit_result.addEventListener("click",get_result_from_player_puzzle.bind(this,answer_of_puzzle));
}



