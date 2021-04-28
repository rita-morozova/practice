import Graph from '../src/graph.js'; 

describe('depth-first search', () => {

    let graph = new Graph();
    graph.addNode('Rita');
    graph.addNode('Mike');
    graph.addNode('Lydia');
    graph.addNode('Rose');
    graph.addNode('Dylan');
    graph.addNode('Allison');
    graph.addNode('Thomas');
    graph.addNode('Sarah');
    graph.createEdge('Rita', 'Mike');
    graph.createEdge('Rita', 'Lydia');
    graph.createEdge('Rita', 'Rose');
    graph.createEdge('Mike', 'Dylan');
    graph.createEdge('Dylan', 'Allison');
    graph.createEdge('Lydia', 'Thomas');

    test('should return false if the target node does not exist', () => {
        expect(graph.depthFirstReachable('Rita', 'Joe')).toEqual(false);
    });

    test('should return false if the starting node does not exist', () => {
        expect(graph.depthFirstReachable('Joe', 'Thomas')).toEqual(false);
    });

    test('should check if the first friend in the adjacency list is reachable', () => {
        expect(graph.depthFirstReachable('Rita', 'Mike')).toEqual(true);
    });

    test('should return false if the target node can not be reached from the starting node', () => {
        expect(graph.depthFirstReachable('Rita', 'Sarah')).toEqual(false);
    });
    
});