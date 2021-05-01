export function findPivot(array, leftPointer, rightPointer) {
    return array[Math.floor((leftPointer + rightPointer)/2)];
  }

  export function swap(array, leftPointer, rightPointer){
    const valueToReplace = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = valueToReplace;
    return array;
  }

  export function sortPartition(array, leftPointer, rightPointer) {
    const pivot = findPivot(array, leftPointer, rightPointer);
    while (leftPointer <= rightPointer) {
      while (array[leftPointer] < pivot) {
        leftPointer++;
      }
      while (array[rightPointer] > pivot) {
          rightPointer--;
      }
      if (leftPointer <= rightPointer) {
        array = swap(array, leftPointer, rightPointer);
        leftPointer++;
        rightPointer--;
      }
    }
    return leftPointer;
  }

  export function quickSort(array, leftPointer = 0, rightPointer = array.length - 1) {
    let partitionPoint;
    if (array.length > 1) {
      partitionPoint = sortPartition(array, leftPointer, rightPointer);
      if (leftPointer < partitionPoint - 1) {
        quickSort(array, leftPointer, partitionPoint - 1);
      }
      if (rightPointer > partitionPoint) {
        quickSort(array, partitionPoint, rightPointer);
      }
    }
    return array;
  }