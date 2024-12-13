export class Phone {
    constructor(model, brand, price) {
        this.model = model;
        this.brand = brand;
        this.price = price;
    }

    static fromJson(json) {
        return new Phone(
            json.model,
            json.brand,
            json.price
        );
    }
}