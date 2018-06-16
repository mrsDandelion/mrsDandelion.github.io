import template from "./index.html";
import "./style.css";
import {create_form_about_player} from "../create_form_about_player";
export function create_start_page(){
    const wrapper_game = document.getElementById("wrapper_game");
    wrapper_game.innerHTML = template;
    const button_start_page = document.getElementById("button_start_page");
    button_start_page.addEventListener("click", create_form_about_player);
}