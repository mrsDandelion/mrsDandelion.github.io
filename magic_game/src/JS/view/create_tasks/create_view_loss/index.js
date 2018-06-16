import "./style.css";
export function create_view_loss(result){
    const wrapper_screen_task = document.getElementById("wrapper_screen_task"); 
    const wrapper_game = document.getElementById("wrapper_game");
    const wrapper_view_loss = document.createElement("div");
    const spell_list = document.getElementById("spell_list");
    wrapper_view_loss.classList.add("wrapper_view_loss");
    wrapper_view_loss.id = "wrapper_view_loss";
    wrapper_view_loss.innerHTML = `
    <div class = "wrapper_loss_text">
        <audio src = "audio/loss.mp3" autoplay></audio>
        <p>Увы! В следующий раз...</p>
        <p>Правильный ответ: ${result}</p>
    </div>
    `;
    wrapper_game.insertAdjacentElement("afterend", wrapper_view_loss);
    wrapper_screen_task.remove();
    spell_list.remove();
}