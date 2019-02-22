const fs = require('fs');
const Node = require('./Node');
const TransportMode = require('./TransportMode');

module.exports = class MultimodalGraph {

    constructor({graph, transportModes}) {

        // initializing properties
        this.nodes = new Array(graph.length);
        this.transportModes = transportModes || [];
        
        for(let i = 0; i < graph.length; i++) {

            // adding a node
            this.nodes[i] = new Node({
                id: i
            });

            // adding its adjacents
            graph[i].adjacencyList.forEach(adjacent => {
                this.nodes[i].addAdjacent(adjacent);
            });
            
        }

    }

    addTransportMode({path, departs}) {
        this.transportModes.push(new TransportMode({path, departs}));
    }

    writeToFile(path) {
        fs.writeFile(path, JSON.stringify(this), (err) => {
            if(err) throw err;
            
            console.log("file created !!");
        })
    }
}