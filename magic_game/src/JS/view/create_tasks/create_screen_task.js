export function create_screen_task(name_spell){
    const wrapper_screen_task = document.createElement("div");
    wrapper_screen_task.classList.add("wrapper_screen_task");
    wrapper_screen_task.classList.add(name_spell);
    wrapper_screen_task.id = "wrapper_screen_task";

    const wrapper_game = document.getElementById("wrapper_game");
    wrapper_game.insertAdjacentElement("afterend", wrapper_screen_task);
}