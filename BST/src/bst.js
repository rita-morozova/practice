export default class BST {
    constructor() {
        this.root = null;
    }

    insertNode(insertedNode) {
        if (this.root === null) {
            this.root = insertedNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.data > insertedNode.data) {
                    if (currentNode.left === null) {
                        // stop traversing, insert node here and return BST
                        currentNode.left = insertedNode;
                        return this; 
                    } else {
                        // there is a node we need to traverse down another level
                        // update the currentNode to node stored in the left property of the node being traversed
                        currentNode = currentNode.left;
                    }
                } else if (currentNode.data < insertedNode.data) {
                   if (currentNode.right === null) {
                       currentNode.right = insertedNode;
                       return this;
                   } else {
                       currentNode = currentNode.right
                   }
                } else {
                    return this;
                }
            }
        }
    }
}