/**
 * Introduction 
 * Given a list of numbers, where every number shows up twice except for one number, find that one number. 
 * e.g. Input: [4, 3, 2, 4, 1, 3, 2]
 * Output: 1
 * 
 * asked-by : [facebook]
 */

function findDuplicateinArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    let flag = 1;
    let sum = 0 ;

    arr.forEach((value,key)=>{
        flag = flag*-1 ;
        value = value*flag;
        sum+=value;
    })
    
    return sum ;
}

// Case 1 :  Number is present
var array = [4,3,2,4,2,3,1] ;
var findNumber = findDuplicateinArray(array);

console.log('Number present is ',findNumber);

//  case 2 : Number is not present {This case is not working }
var array1 = [4,3,2,2,4,3];
var findTheNumber = findDuplicateinArray(array1);

console.log('Number present is',findTheNumber);

// case 3 : array is not present

var array3 = {a:100}
var findDNumber = findDuplicateinArray(array3);

console.log('Number prresent is',findDNumber);