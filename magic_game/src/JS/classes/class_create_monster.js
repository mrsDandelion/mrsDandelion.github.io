export class monster{
    constructor(){
        this.hp = 100;
    }
    create_random_number (max_number){
       return Math.floor(Math.random() * max_number);
    }
    create_head(){
        const arr_of_head = ['head1.png','head2.png','head3.png','head4.png','head5.png','head6.png'];
        const current_position_head = this.create_random_number (arr_of_head.length);
        this.head = arr_of_head[current_position_head];
    }
    create_body(){
        const arr_of_body = ['body1.png','body2.png','body3.png','body4.png','body5.png','body6.png'];
        const current_position_body =  this.create_random_number (arr_of_body.length);
        this.body = arr_of_body[current_position_body];
    }
    create_legs(){
        const arr_of_leg = ['leg1.png','leg2.png','leg3.png','leg4.png','leg5.png','leg6.png'];
        const current_position_leg =  this.create_random_number (arr_of_leg.length);
        this.leg = arr_of_leg[current_position_leg];
    }
    create_weapon(){
        const arr_of_weapon = ['weapon1.png','weapon2.png','weapon3.png'];
        const current_position_weapon =  this.create_random_number (arr_of_weapon.length);
        this.weapon = arr_of_weapon[current_position_weapon];
    }
    create_name(){
        const first_name = ['Сопливый ','Пугливый ','Трусливый ','Злобный ','Угрюмый ','Хитрый '];
        const second_name = ['Троль ','Гном ','Огр ','Гоблин ','Моллюск '];
        const third_name = ['Том','Джек','Вася','Миша','Гриша'];
        
        const current_position_first_name = this.create_random_number (first_name.length);
        const current_position_second_name = this.create_random_number (second_name.length);
        const current_position_third_name = this.create_random_number (third_name.length);

        this.name = first_name[current_position_first_name] + second_name[current_position_second_name] + third_name[current_position_third_name];
    }
}