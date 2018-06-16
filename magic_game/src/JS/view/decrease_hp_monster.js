export function decrease_hp_monster(amount){
    const hp_monster = document.getElementById("hp_monster");
    const start = Date.now();
    let item_width_hp_monster =  300*amount/4800;
    let width_hp_monster = hp_monster.clientWidth;
    
    const timer = setInterval(()=>{
        const timePassed = Date.now() - start;
        
        if (timePassed >= 1000) {
            clearInterval(timer);
            return;
        }        
        width_hp_monster = width_hp_monster - item_width_hp_monster;
        hp_monster.style.width = `${width_hp_monster}px`;
        },20);
}