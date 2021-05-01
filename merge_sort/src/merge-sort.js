export function merge(leftArray, rightArray) {
    let mergedArray =[];
    let leftIndex = 0;
    let rightIndex = 0;
    while((leftIndex < leftArray.length) && (rightIndex < rightArray.length)) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]){
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex ++;
        }
    }
    mergedArray = mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
    return mergedArray;
};

export function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const midpoint = Math.floor(array.length / 2);
    const leftArray = array.slice(0, midpoint);
    const rightArray = array.slice(midpoint);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }