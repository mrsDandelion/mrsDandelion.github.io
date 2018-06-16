export function create_task_arithmetic(){
    let first_number = create_random_number(100);
    let second_number = create_random_number(100);
    const operation = get_operation();

    if(operation === "/"  && first_number % second_number !== 0){
        create_number_for_division();
    } 

    if(operation === "*"  && first_number * second_number - 100 > 0){
        create_number_for_multiplication();
    } 
    const result = [`${first_number}${operation}${second_number}`];

    if(operation === "/"){
        result[1] = first_number/second_number;
    }
    if(operation === "-"){
        result[1] = first_number-second_number;
    }
    if(operation === "*"){
        result[1] = first_number*second_number;
    }
    if(operation === "+"){
        result[1] = first_number+second_number;
    }

    return result;

    function create_number_for_division(){
        second_number = create_random_number(50);
        if(first_number % second_number !== 0){
            create_number_for_division();
        }
        return second_number;
    }
    function create_number_for_multiplication(){
        first_number = create_random_number(50);
        second_number = create_random_number(50);
        if(first_number * second_number - 100 > 0){
            create_number_for_multiplication();
        }
        return second_number;
    }
    function create_random_number (max_number){
        return Math.floor(Math.random() * (max_number+1));
    }
    function get_operation(){
        const arr_operation = ["+", "-", "*", "/"];
        const number_operation = Math.floor(create_random_number(4));
        return arr_operation[number_operation];
    }
}