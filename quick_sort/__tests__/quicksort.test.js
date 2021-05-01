import { findPivot, swap, sortPartition, quickSort } from '../src/quicksort.js';

describe('quicksort functions', () => {

  test('it will find a pivot point halfway through the array', () => {
    const array = [1,6,9];
    const leftPointer = 0;
    const rightPointer = 2;
    expect(findPivot(array, leftPointer, rightPointer)).toEqual(6);
  });

  test('it will swap two values in an array', () => {
    let array = [6,9,3,1,5];
    const leftPointer = 0;
    const rightPointer = 3;
    expect(swap(array, leftPointer, rightPointer)).toEqual([1,9,3,6,5]);
  });

  test('it will sort and swap values in an array based on a pivot point', () => {
    const array = [5, 1, 3, 2, 7];
    const leftPointer = 0;
    const rightPointer = 4;
    expect(sortPartition(array, leftPointer, rightPointer)).toEqual(3);
  });

  test('it will quicksort an array', () => {
    let array = [3, 9, 7, 2, 8, 6, 5, 4];
    expect(quickSort(array)).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });

});