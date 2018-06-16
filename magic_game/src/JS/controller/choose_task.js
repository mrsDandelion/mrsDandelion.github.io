import {create_form_of_task_arith} from "../view/create_tasks/create_task_arith";
import {create_task_drag_drop} from "../view/create_tasks/create_task_drag_drop";
import {create_task_translate} from "../view/create_tasks/create_task_translate";
import {create_task_puzzles} from "../view/create_tasks/create_task_puzzles";
import {create_task_rebus} from "../view/create_tasks/create_task_rebus";
import {create_task_comparison} from "../view/create_tasks/create_task_comparison"
import {create_task_select_third} from "../view/create_tasks/create_task_select_third";
import {create_task_questions} from "../view/create_tasks/create_task_questions";
import {create_task_add_letters} from "../view/create_tasks/create_task_add_letters";
import {create_task_believe} from "../view/create_tasks/create_task_believe";
import {create_task_dictionary_words} from "../view/create_tasks/create_task_dictionary_words";
import {create_task_accent} from "../view/create_tasks/create_task_accent";
import {create_task_sequence} from "../view/create_tasks/create_task_sequence";
import {create_task_same_picture} from "../view/create_tasks/create_task_same_pictures";
import {create_task_capitals} from "../view/create_tasks/create_task_capitals";
export function choose_task(){
    const arr_tasks = [create_task_capitals,create_task_same_picture,create_task_sequence,create_task_accent,create_task_dictionary_words,create_task_believe,create_task_add_letters,create_task_questions,create_task_select_third,create_form_of_task_arith,create_task_drag_drop,create_task_translate,create_task_puzzles,create_task_rebus,create_task_comparison];
    const number_position =  Math.round(Math.random() * (arr_tasks.length-1));
    arr_tasks[number_position]();
}