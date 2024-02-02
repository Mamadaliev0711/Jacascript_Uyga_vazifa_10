// 1-Masala
let arr_1 = [2, 4, 58, 7, 12, 56, 45, 24, 23];
function NewMassiv(arr) {
   let result_1 = arr_1.filter(num => num > 10);
    return result_1;
}
console.log(NewMassiv(arr_1));

// 2-Masala
let arr_2 = [5, 6, 7, 8, 9, 10, 11, 12]
function arrKub(arr) {
   let result_2 = arr.map(num => Math.pow(num,3));
   return result_2;
}
console.log(arrKub(arr_2));
// 
// 3-Masala

let arr_3 = [10, 15, 45, 78, 55, 65, 74, 35];
function arrKarrali(arr_3) {
   for (let i = 0; i < arr_3.length; i++) {
   if (arr_3[i] % 3 == 0 && arr_3[i] % 5 == 0) {
      return true;
   }
}
   return false;
}
console.log(arrKarrali(arr_3));

// 4-Masala

let arr_4 = [4, 87, 9, 65, 4, 24];
function arrKatta(arr_4) {
   let saralash = arr_4.sort((a, b) => b - a);
   return saralash.slice(0,3);
}
console.log(arrKatta(arr_4));

// 5-Masala
let arr_5 = [15, 16, 17, 18, 19, 20]
function arrTeskari(arr_5) {
   return arr_5.reverse();
}
console.log(arrTeskari(arr_5));