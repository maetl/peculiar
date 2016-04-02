import assert from 'assert';
import { Graph } from './metis';

describe('Graph', function() {
  it("starts empty", function() {
    var graph = new Graph();
    assert.equal(graph.nodesCount(), 0);
  });

  it("can add nodes", function() {
    var graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);

    assert.equal(graph.nodesCount(), 3);
  });

  it("can add edges", function() {
    var graph = new Graph();
    graph.addEdge({ from: 1, to: 2});
    graph.addEdge({ from: 2, to: 3});

    assert.equal(graph.nodesCount(), 3);
    assert.equal(graph.edgesCount(), 2);
  });
});
