module.exports = class TransportPlanning {
    constructor({walk, bus, metro, tramway}) {

        /*
        walk, bus, metro and tramway are arrays of departs
        each elements means the mode, time and
        */

        // initializing in case of an empty array is passed to the constructor

        walk = walk || [];
        bus = bus || [];
        metro = metro || [];
        tramway = tramway || [];



        // getters and setters

        this.getPlanning = () => {
            walk,
            bus,                            
            metro,
            tramway
        };

        this.getPlanningMixed = () => {
            
            return (
                walk.concat(bus)
                .concat(metro)
                .concat(tramway)
            );
        };

    }
}

