function split(arr) {
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let sencondHalf = arr.slice(mid);
  return [firstHalf, sencondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] < arr2[i2] || !arr2[i2]) {
      mergedArr.push(arr1[i1]);
      i1++;
    } else {
      mergedArr.push(arr2[i2]);
      i2++;
    }
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
    console.log(arr, 'ARR');
  let [arr1, arr2] = split(arr);
  // se siguen dividiendo los valores recursivamente hasta que las arr esten divididas en valores singulares
  let m1 = mergeSort(arr1); //firstHalf
  console.log(m1, 'M1');
  let m2 = mergeSort(arr2); //sencondHalf
  console.log(m2, 'M2');

  //cuando se llega a la division de todos los valores, se empiezan a ordenar usando merge

  return merge(m1, m2);
  //OPTIMIZACION
  // return merge(mergeSort(ar1), mergeSort(arr2))
}

console.log(mergeSort([1, 4, 7, 2, 5, 8, 3, 6, 9]));
