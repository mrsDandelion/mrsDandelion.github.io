export function create_view_win(){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task"); 
    const wrapper_game = document.getElementById("wrapper_game");
    const wrapper_view_win = document.createElement("div");
    const spell_list = document.getElementById("spell_list");
    wrapper_view_win.classList.add("wrapper_view_win");
    wrapper_view_win.id = "wrapper_view_win";
    wrapper_view_win.innerHTML = `
    <div class = "wrapper_win_text">
        <audio src = "audio/arfa.mp3" autoplay></audio>
        <p>Молодец!</p>
    </div>
    `;
    wrapper_game.insertAdjacentElement("afterend", wrapper_view_win);
    wrapper_screen_task.innerHTML = "";
    spell_list.remove();
}