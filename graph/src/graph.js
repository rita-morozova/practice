export default class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addNode(name) {
        this.adjacencyList.set(name, new Set());
    };

    hasNode(name) {
        if (this.adjacencyList.get(name)) {
            return true;
        }
        return false
    };

    createEdge(node1, node2) {
        this.adjacencyList.get(node1).add(node2);
        this.adjacencyList.get(node2).add(node1);
    };

    hasEdge(node1, node2) {
        if (this.adjacencyList.get(node1).has(node2)) {
            return true
        }
        return false;
    };

    removeEdge(node1, node2) {
        this.adjacencyList.get(node1).delete(node2);
        this.adjacencyList.get(node2).delete(node1);
    };

    removeNode(name) {
        if (this.adjacencyList.has(name)) {
            this.adjacencyList.get(name).forEach((edge) => {
                this.adjacencyList.get(edge).delete(name);
            });
            this.adjacencyList.delete(name);
        }
    };

    depthFirstReachable(startingNode, targetNode) {
        if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
            return false;
        }
        // create a stack
        let stack = [startingNode];
        // flag traversed nodes
        let traversedNodes = new Set();
        // iterate until collection's size is zero
        while(stack.length) {
            // take first element of the stack (and remove it)
            const currentNode = stack.shift();
            // if found return true
            if (currentNode === targetNode) {
                return true;
            } else {
                // add this node to traversed ones
                traversedNodes.add(currentNode);
                // get adjacency list for this node
                const adjacencyList = this.adjacencyList.get(currentNode);
                // add all ajacency nodes to the top of the stack
                adjacencyList.forEach(function(node) {
                    if (!traversedNodes.has(node)) {
                        stack.unshift(node);
                    }
                });
            }
        }
        return false;
    };

    breadthFirstReachable(startingNode, targetNode) {
        if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
            return false;
        }
        // create a queue
        let queue = [startingNode];
        // flag traversed nodes
        let traversedNodes = new Set();
        // iterate until collection's size is zero
        while(queue.length) {
            // take first element of the queue (it will also remove it from the queue)
            const currentNode = queue.shift();
            // if found return true
            if (currentNode === targetNode) {
                return true;
            } else {
                // add this node to traversed ones
                traversedNodes.add(currentNode);
                // get adjacency list for this node
                const adjacencyList = this.adjacencyList.get(currentNode);
                // add all ajacency nodes to the queue
                adjacencyList.forEach(function(node) {
                    if (!traversedNodes.has(node)) {
                        queue.push(node);
                    }
                });
            }
        }
        return false;
    };

}