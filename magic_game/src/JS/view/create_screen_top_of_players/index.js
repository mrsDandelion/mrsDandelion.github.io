import{close_screen_top} from "./close_screen_top.js";
import template from "./head_table.html";
import "./style.css";

export function create_screen_top_of_players(arr_of_players){
    const wrapper_top = document.createElement("div");
    wrapper_top.classList.add("wrapper_top");
    wrapper_top.id = "wrapper_top";
    
    const table = document.createElement("table");
    table.innerHTML = template;

    for(let i = 0; i < arr_of_players.length; i++){
        const tr = document.createElement("tr");
        const td_number = document.createElement("td");
        const td_name = document.createElement("td");
        const td_amount_of_monster = document.createElement("td");

        td_number.textContent = i+1;
        td_name.textContent = arr_of_players[i].name_player;
        td_amount_of_monster.textContent = arr_of_players[i].amount_monster;

        tr.appendChild(td_number);
        tr.appendChild(td_name);
        tr.appendChild(td_amount_of_monster);

        table.appendChild(tr);
    }
    wrapper_top.appendChild(table);

    const button_close = document.createElement("button");
    button_close.id = "button_close";
    button_close.addEventListener("click", close_screen_top);
    button_close.textContent = "Закрыть";

    wrapper_top.appendChild(button_close);

    const wrapper_game = document.getElementById("wrapper_game");
    wrapper_game.insertAdjacentElement("afterend", wrapper_top);
}