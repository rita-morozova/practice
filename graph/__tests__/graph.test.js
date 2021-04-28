import Graph from '../src/graph.js';

describe('Graph', () => {

    let graph = new Graph();

    // reset the graph after each test
    afterEach(() => {
        graph = new Graph();
    });

    test('should correctly instantiate a graph', () => {
        expect(graph.adjacencyList.size).toEqual(0);
    });

    test('should add a new node', () => {
        graph.addNode('Rita');
        expect(graph.adjacencyList.get('Rita').size).toEqual(0);
    });

    test('should return false if the node does not exist in the adjacency list', () => {
        expect(graph.hasNode('Mike')).toEqual(false);
    });

    test('check to see if the node exists in graph', () => {
        graph.addNode('Rita');
        expect(graph.hasNode('Rita')).toEqual(true);
    });

    test('add an edge between two nodes', () => {
        graph.addNode('Rita');
        graph.addNode('Mike');
        graph.createEdge('Rita', 'Mike');
        expect(graph.hasEdge('Rita', 'Mike')).toEqual(true);
    });

    test('check to see if edge exists in graph', () => {
        graph.addNode('Rita');
        graph.addNode('Mike');
        expect(graph.hasEdge('Rita', 'Mike')).toEqual(false);
    });

    test('remove an edge between two nodes', () => {
        graph.addNode('Rita');
        graph.addNode('Mike');
        graph.createEdge('Rita', 'Mike');
        graph.removeEdge('Rita', 'Mike');
        expect(graph.hasEdge('Rita', 'Mike')).toEqual(false);
    });

    test('should delete a node and all of ots adjacent nodes', () => {
        graph.addNode('Rita');
        graph.addNode('Mike');
        graph.addNode('Steven');
        graph.createEdge('Rita', 'Mike');
        graph.createEdge('Rita', 'Steven');
        graph.removeNode('Rita');
        expect(graph.hasNode('Rita')).toEqual(false);
        expect(graph.hasEdge('Mike', 'Rita')).toEqual(false);
        expect(graph.hasEdge('Steven', 'Rita')).toEqual(false);
    });

})