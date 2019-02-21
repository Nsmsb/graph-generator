module.exports = class TransportPlanning {
    constructor(path, {walk, bus, metro, tramway}) {

        /*
        walk, bus, metro and tramway are arrays of departs
        each elements means the mode, time and
        */


        // getters and setters
        this.getPath = () => path;

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

