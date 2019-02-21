module.exports = class Depart {

    constructor({departTime, distance, price}) { 

        //getters and setters

        this.getDepartTime = () => departTime;
        this.getDistance = () => distance;
        this.getPrice = () => price;
    }

}