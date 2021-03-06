/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

/* 1.Yol Diziden sadece 2 elemanlı dizileri seçme*/
const getArray = pairsByIndexRaw
  .filter(value => Array.isArray(value))
  .filter(value => value.length === 2);

//  3 diziyi birleştiren döngü 
for (let i = 0; i < 4; i++) {
  getArray[i][0] = students[getArray[i][0]];
  getArray[i][1] = mentors[getArray[i][1]];
}

console.log(getArray);


//   OR

/* 2.Yol Diziden sadece 2 elemanlı dizileri seçme*/

/*
let getArray2 = (value) => Array.isArray(value) && value.length > 1;

getArray2 = pairsByIndexRaw.filter(getArray2);

for (let i = 0; i < 4; i++) {
  getArray2[i][0] = students[getArray2[i][0]];
  getArray2[i][1] = mentors[getArray2[i][1]];
}

console.log(getArray2);

*/




// Mustafa beyden, For döngüsüyle yazdığım kısmı yapıyor

// var pairs = getArray.map(function (indexes) {
//   var student = students[indexes[0]];
//   var mentor = mentors[indexes[1]];
//   return [student, mentor];
// });

// console.log(pairs);
