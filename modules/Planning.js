const Depart = require('./Depart');

module.exports = class Planning {

    /*

    Plannings are used in the TranspotPlanning, each transportMode has a planning,
    a planning has a distance and departsb which is a list of Departs

    */
   
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