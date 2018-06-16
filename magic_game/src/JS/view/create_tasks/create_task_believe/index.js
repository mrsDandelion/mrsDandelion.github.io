import arr_task_believe from "../../../constans/arr_task_believe.json";
import template from "./index.html";
import "./style.css";
import {get_result_from_player} from "./get_result_from_player.js"
export function create_task_believe(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task");
    const number_position =  Math.round(Math.random() * (arr_task_believe.task_believe.length-1));

    const current_arr = arr_task_believe.task_believe[number_position];
    const right_answer = current_arr[1];

    const wrapper_labels = document.createElement("div");
    const question = document.createElement("p");
    question.textContent = current_arr[0];
    wrapper_labels.appendChild(question);

    create_label("yes","Верю","checked");
    create_label("no","Не верю");
    
    wrapper_screen_task.innerHTML = template;
    const submit_result_believe = document.getElementById("submit_result_believe");    
    submit_result_believe.insertAdjacentElement("beforeBegin",wrapper_labels);    
    submit_result_believe.addEventListener("click",get_result_from_player.bind(this,right_answer));

    function create_label(value_for_input, value_for_label, checked){
        const label = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        input.setAttribute("type","radio");
        input.setAttribute("name","believe");
        input.setAttribute("value",value_for_input);
        if(checked === "checked"){
            input.setAttribute("checked","");
        }
        input.id = value_for_input;
        label.textContent = value_for_label;
        label.setAttribute("for",value_for_input);
        p.appendChild(input);
        p.appendChild(label);
        wrapper_labels.appendChild(p);
    }
}
/*{
    "task_believe":
    [
        ["В Японии ученики на доске пишут кисточкой с цветными чернилами?","yes"],
        ["В Австралии практикуется применение одноразовых школьных досок?","no"],
        ["Авторучка была изобретена еще в Древнем Египте?","yes"],
        ["Шариковая ручка сначала применялась только военными летчиками?","yes"],
        ["В Африке выпускаются витаминизированные карандаши для детей, имеющих обыкновение грызть что попало?","yes"],
        ["В некоторые виды цветных карандашей добавляется экстракт моркови для большей прочности грифеля?","no"],
        ["Римляне носили штаны?","no"],
        ["Если пчела ужалит кого-либо, то она погибнет?","yes"],
        ["Правда ли что, пауки питаются собственной паутиной?","yes"],
        ["Если камбалу положить на шахматную доску, она тоже станет клетчатой?","yes"],
        ["Спартанские воины перед битвой опрыскивали волосы духами?","yes"],
        ["Глаз наполнен воздухом?","no"],
        ["Утром вы выше ростом, чем вечером?","yes"],
        ["В некоторых местах люди по-прежнему моются с помощью оливкового масла?","yes"]
    ]*/