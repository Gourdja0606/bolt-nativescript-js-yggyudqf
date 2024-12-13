export class Vehicle {
    constructor(model, brand, year, price) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.price = price;
    }

    static fromJson(json) {
        return new Vehicle(
            json.model,
            json.brand,
            json.year,
            json.price
        );
    }
}