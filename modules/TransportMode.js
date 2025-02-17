module.exports = class TransportMode {

    /*

    transport modes are used to fill the graph and also are refered to at the departs (vehicle)

    */
    constructor({id, type, path, departs}) {


        // getters and setters

        this.getId = () => id;
        this.getType = () => type;
        this.getPath = () => path;
        this.getDeparts = () => departs;
    }
}