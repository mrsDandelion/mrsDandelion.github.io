export function decrease_hp_player(amount){
    const hp_player = document.getElementById("hp_player");
    const start = Date.now();
    let item_width_hp_player=  300*amount/4800;
    let width_hp_player = hp_player.clientWidth;
    
    const timer = setInterval(()=>{
        const timePassed = Date.now() - start;
        
        if (timePassed >= 1000) {
            clearInterval(timer);
            return;
        }        
        width_hp_player = width_hp_player - item_width_hp_player;
        hp_player.style.width = `${width_hp_player}px`;
    },20);
}