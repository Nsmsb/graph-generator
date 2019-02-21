const Adjacent =  require('./Adjacent');

module.exports = class Node {
    
    constructor({id, adjacents}) {

        adjacents = adjacents || [];

        // setters and getters
        this.getAdjacents = () => adjacents;
        this.getId = () => id;

    }

    addAdjacent(id) {
        this.getAdjacents().push(
            new Adjacent({
                destination: id
            });
        )
    }

}