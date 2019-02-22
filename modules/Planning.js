const Depart = require('./Depart');

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

    // methodes

    addDepart(time, price) {
        this.getDeprats().push(new Depart({
            departTime: time,
            price: price
        }));
    }

    getFeasibleDeparts(time) {
        return this.getDeprats().filtre()

        //TODO
    }
}