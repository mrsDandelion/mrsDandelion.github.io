import {monster} from "../classes/class_create_monster.js";
export function create_wrapper_monster(){
    let current_monster = new monster();
    current_monster.create_head();
    current_monster.create_body();
    current_monster.create_legs();
    current_monster.create_weapon();
    current_monster.create_name();

    localStorage.setItem("current_monster_magic-game",JSON.stringify(current_monster));

    const img_head = document.createElement('img');
    img_head.setAttribute('src',`images/head/${current_monster.head}`);

    const img_body = document.createElement('img');
    img_body.setAttribute('src',`images/body/${current_monster.body}`);

    const img_leg = document.createElement('img');
    img_leg.setAttribute('src',`images/legs/${current_monster.leg}`);

    const img_weapon = document.createElement('img');
    img_weapon.setAttribute('src',`images/weapons/${current_monster.weapon}`);

    const wrapper_monster = document.createElement('div');
    wrapper_monster.classList.add('wrapper_monster');

    const name_monster = document.createElement('p');
    name_monster.textContent = current_monster.name;

    const wrapper_hp_monster = document.createElement("div");
    const hp_monster = document.createElement("div");
    wrapper_hp_monster.appendChild(hp_monster);
    wrapper_hp_monster.classList.add("wrapper_hp_monster");
    hp_monster.id = "hp_monster";

    const wrapper_body_monster = document.createElement("div");
    wrapper_body_monster.classList.add("wrapper_body_monster");

    wrapper_monster.appendChild(name_monster);
    wrapper_monster.appendChild(wrapper_hp_monster);
    wrapper_body_monster.appendChild(img_head);
    wrapper_body_monster.appendChild(img_body);
    wrapper_body_monster.appendChild(img_leg);
    wrapper_body_monster.appendChild(img_weapon);
    wrapper_monster.appendChild(wrapper_body_monster);

    wrapper_monster.classList.add("fadeInRight");

    const wrapper_game = document.querySelector('.wrapper_game');
    
    wrapper_game.appendChild(wrapper_monster);
}