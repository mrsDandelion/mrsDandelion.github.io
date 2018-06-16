export function create_bubble_sort_for_top(array) 
{
 const length = array.length;
 for (let i = 0; i < length-1; i++){ 
     for (let j = 0; j < length-1-i; j++){
        if (array[j+1].amount_monster > array[j].amount_monster){ 
            const temp = array[j+1];
            array[j+1] = array[j]; 
            array[j] = temp; 
        }
    }
 } 
 return array; 
}