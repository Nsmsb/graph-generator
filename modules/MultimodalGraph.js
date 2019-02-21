const fs = require('fs');

module.export = class MultimodalGraph {

    constructor(graph, transportModes) {

    }

    writeToFile(path) {
        fs.writeFile(path, JSON.stringify(this), (err) => {
            if(err) throw err;
            
            console.log("file created !!");
        })
    }
}