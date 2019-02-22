module.exports = class Planning {

    constructor({distance, departs}) {

        // initializing properties
        if(distance == null)
            throw new Error("A distance must be assigned.");
        
            departs = departs || [];


        // getters & setters

        this.getDistance = () => distance;
        this.getDeprats = () => departs;

    }
}