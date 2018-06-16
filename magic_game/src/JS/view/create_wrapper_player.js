export function create_wrapper_player(current_player){
    const wrapper_game = document.getElementById('wrapper_game');
    
    wrapper_game.innerHTML = `
    <div class = "wrapper_player fadeInLeft">
        <p class = "name_of_player">${current_player.name_player}</p>
        <div class = "wrapper_hp_player" id = "wrapper_hp_player">
            <div id = "hp_player"></div>
        </div>
        <div class = "wrapper_body_player">
            <img src="images/player/${current_player.sex_of_player}" alt = "player">
        </div>
    </div>
    `;
}