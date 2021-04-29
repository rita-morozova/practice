export default class HashTable {
    constructor() {
        this.array = [];
    };

    // Grab the first letter of the string, make sure it's lower-cased
    // Convert it to its corresponding ASCII
    // Lowercase 'a' corresponds to 97, so we need to extract it
    hash(key) {
        return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
    };

    set(key, value) {
        const index = this.hash(key);
        // If there is no value at the specified index, we place an empty array there
        if (this.array[index] === undefined) {
            this.array[index] = []
        }
        this.array[index].push([key, value]);
    };

    get(key) {
        const index = this.hash(key);
        const bucket = this.array[index];
        if (bucket != undefined) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return null
    };
}