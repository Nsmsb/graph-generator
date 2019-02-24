module.exports = class TransportMode {

    constructor({id, type, path, departs}) {


        // getters and setters
        
        this.getId = () => id;
        this.getType = () => type;
        this.getPath = () => path;
        this.getDeparts = () => departs;
    }
}