/**
 * You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
 * e.g. Given [4, 7, 1 , -3, 2] and k = 5, 
 * return true since 4 + 1 = 5.
 * Extra : "Try to do it in a single pass of the list."
 * Asked By : [Facebook]
 */

 // Methd 1 :
 function findanotherPair(arr,sum){
    if(!Array.isArray(arr)){
        return null ;
    }
    let obj = {}
    let resultedPair = [] ;
    arr.forEach((value,key)=>{
        obj[sum-[value]] = value ;
        if(obj[value] !=undefined){
            resultedPair.push(obj[value],value);
        }
    });
    return resultedPair ;
 }

// Case 1 : Pair exists
var arr = [4,7,1,-3,2];
var k = 5 ;

var result = findanotherPair(arr,k);
 if(!result.length){
     console.log('There is no such pair exists for ', k);
 }else{
     console.log('There exists a pair for',k,'i.e.',result[0],result[1]);
 }

// Case 2 : Pair does not exists
var arr1 = [4,7,1,-3,2];
var k1 = 51 ;

var result1 = findanotherPair(arr1,k1);
 if(!result1.length){
     console.log('There is no such pair exists for ', k1);
 }else{
     console.log('There exists a pair for',k1,'i.e.',result1[0],result1[1]);
 }