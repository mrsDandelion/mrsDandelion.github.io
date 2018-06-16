export function save_info_about_battle(){
    const current_player = JSON.parse(localStorage.getItem("current_player_magic-game"));
    
    const player = {
        name_player : current_player.name_player,
        amount_monster : current_player.amount_monster
    };

    const id_player =  JSON.parse(localStorage.getItem("amount_of_saved_player"));        
    localStorage.setItem(`${id_player}_player_game`,JSON.stringify(player));
}