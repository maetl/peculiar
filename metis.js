export default class Graph {
  constructor() {
    this.index = {}
  }

  addNode(node) {
    if (!this.index[node]) {
      this.index[node] = new Set();
    }
  }

  addEdge(edge) {
    this.addNode(edge.from);
    this.addNode(edge.to);
    this.index[node].add(edge.to);
  }
}
