const Adjacent =  require('./Adjacent');

module.exports = class Node {
    
    constructor({id, adjacents}) {

        adjacents = adjacents || [];

        // setters and getters
        this.getAdjacents = () => adjacents;
        this.getId = () => id;

    }

    // methode to add an adjacent

    addAdjacent(id) {
        this.getAdjacents().push(
            new Adjacent({
                destination: id
            })
        );
    }


    // method to get an adjacent, it takes an id and 
    // returns the adjacent if found, if not it returns -1
    
    getAdjacent(id) {
        let adjacent = this.getAdjacents()[id];

        if(adjacent != null)
            return adjacent;
        return -1;
    }

}