modules.export = class Node {
    
    constructor({id, adjacents}) {


        // setters and getters
        this.getAdjacents = () => adjacents;
        this.getId = () => id;

    }

}