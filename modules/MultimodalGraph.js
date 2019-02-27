const fs = require('fs');
const Node = require('./Node');
const TransportMode = require('./TransportMode');
const Depart = require('./Depart');

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
                this.nodes[i].addAdjacent(adjacent.destination);
            });
            
        }

        // filling the plannings

        transportModes.forEach(tm => {
            let path = tm.getPath();

            tm.getDeparts().forEach(dp => {
                for(let i = 0; i < path.length-1; i++) {
                    let temp = this.nodes[path[i]];
                    temp = temp.getAdjacent(path[i+1]);
                    this.nodes[path[i]].getAdjacent(path[i+1]).addPlanning(dp, Math.random()*10, tm.getType());
                }
            });
        });

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