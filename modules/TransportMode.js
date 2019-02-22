module.exports = class TransportMode {

    constructor({type, path, departs}) {

        this.getType = () => type;
        this.getPath = () => path;
        this.getDeparts = () => departs;
    }
}