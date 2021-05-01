import { merge, mergeSort } from '../src/merge-sort.js';

describe('merge', () => {

    test('it will merge two arrays of one element each', () => {
        const leftArray = [3];
        const rightArray = [6];
        expect(merge(leftArray, rightArray)).toEqual([3,6]);
    });

    test('it will merge and sort two arrays of one element each', () => {
        const leftArray = [6];
        const rightArray = [3];
        expect(merge(leftArray, rightArray)).toEqual([3,6]);
    });

    test('it will merge and sort two arrays of two elements each', () => {
        const leftArray = [3,5];
        const rightArray = [4,6];
        expect(merge(leftArray, rightArray)).toEqual([3,4,5,6]);
    });

    test('mergeSort() will return an array of one or zero elements', () => {
        const array = [1]
        expect(mergeSort(array)).toEqual([1]);
    });

    test('mergeSort() will sort an array of two elements', () => {
        const array = [7,4];
        expect(mergeSort(array)).toEqual([4,7]);
    });

});