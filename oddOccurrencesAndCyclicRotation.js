//Codility Challenges Lesson 2 - Arrays 

//Odd Occurences in Array

//given an array of odd integers, find the one element that does not have a paired match

let arr4 = [1, 2, 1, 2, 3];
let arr5 = [ 4, 5, 6, 4, 5, 4, 5];
let arr6 = [7, 8, 7, 7, 7];

let matchFind = (array) => {
    array = array.sort();

        let lastNumArray = [];
        for (let i = 0; i < array.length; i++) {
         if (array.lastIndexOf(array[i]) == array.indexOf(array[i])) {
            lastNumArray.push(array[i]);    
        }
    }
    console.log(lastNumArray.toString());
};

matchFind(arr4); //output: 3
matchFind(arr5); //output: 6
matchFind(arr6); //output: 8

//cyclic rotation

//given an array of integers, find a way to shift the array by a provided number

let arr1 = [1, 2, 3, 4];

let arr2 = [0, 0, 1];

let arr3 = [8, 9, 10, 11, 12];

let arrayShift = (array, numRotation) => {
    let numToShift = numRotation * 2;
    for (let i = numRotation; i < numToShift; i ++) {
        let firstNum = array.slice(-1).shift();
        array.unshift(firstNum);
        array.pop();
    }
    console.log(array);
}

arrayShift(arr1, 2); // output: [ 3, 4, 1, 2 ]
arrayShift(arr2, 1); // output: [ 1, 0, 0 ]
arrayShift(arr3, 3); // output: [ 10, 11, 12, 8, 9 ]
