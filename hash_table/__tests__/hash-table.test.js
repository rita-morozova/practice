import HashTable from '../src/hash-table.js';

describe('HashTable', () => {

    let hashTable = new HashTable();

    afterEach(() => {
        hashTable = new HashTable();
    });

    test('should instantiate a hash with an empty array', () => {
        expect(hashTable.array).toEqual([]);
    });

    test('should return a number representation of a letter', () => {
        expect(hashTable.hash('Alaric')).toEqual(0);
        expect(hashTable.hash('zygorth')).toEqual(25);
    });

    test('should correctly set a key-value pair in a hash table', () => {
        hashTable.set('John', 'Human');
        expect(hashTable.array[9]).toEqual([['John', 'Human']]);
    });

    test('should correctly get a key-value pair from a hash table', () => {
        hashTable.set('John', 'Human');
        hashTable.set('Jeeny', 'Alien');
        expect(hashTable.get('John')).toEqual('Human');
    });

    test('should return null if the bucket has no values', () => {
        expect(hashTable.get('John')).toEqual(null);
    });

    test('should return null if the bucket does not contain the key we are looking for', () => {
        hashTable.set('John', 'Human');
        hashTable.set('Jeeny', 'Alien');
        expect(hashTable.get('Johana')).toEqual(null);
    });
    
})