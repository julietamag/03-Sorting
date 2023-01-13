function bubbleSort(array) {
  /* tu codigo acá */
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      let iL = i;
      let iR = i + 1;
      if (array[iL] > array[iR]) {
        swap(array, iL, iR);
        swapped = true;
      }
    }
} while (swapped);
return array;
}

function swap(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}



let arrDesordenado = [2, 5, 8, 1, 4, 7, 3, 6, 9];

bubbleSort(arrDesordenado);

console.log();