export class player{
	constructor(name_player,sex_of_player){
        this.hp = 100;
        this.name_player = name_player;
		this.amount_monster = 0;
		this.sex_of_player = sex_of_player;
	}
	save_info_about_player(){
		let player = {
			name_player : this.name_player,
			amount_monster : this.amount_monster
		};
		localStorage.setItem(`${this.id_player}_player_game`, JSON.stringify(player));
	}
	create_id_player(){
		if (!localStorage.getItem('amount_of_saved_player')) {
			localStorage.setItem('amount_of_saved_player', '0');
		}
		this.id_player = +localStorage.getItem('amount_of_saved_player') + 1;
		localStorage.setItem('amount_of_saved_player', this.id_player);
	}
	check_name_player(){
		if(this.name_player === ""){
			this.name_player = `Игрок № ${this.id_player}`;
		}
	}
}