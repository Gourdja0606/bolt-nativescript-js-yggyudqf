export class Property {
    constructor(title, location, price, description = '') {
        this.title = title;
        this.location = location;
        this.price = price;
        this.description = description;
    }

    static fromJson(json) {
        return new Property(
            json.title,
            json.location,
            json.price,
            json.description
        );
    }
}