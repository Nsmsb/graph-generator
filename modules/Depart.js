module.exports = class Depart {

    /*

    Depart s are used in the planning, each depart has a time, price and a vehicle

    */

    constructor({departTime, price, vehicle}) { 

        //getters and setters

        this.getDepartTime = () => departTime;
        this.getPrice = () => price;
        this.getVehicle = () => vehicle;
    }

}