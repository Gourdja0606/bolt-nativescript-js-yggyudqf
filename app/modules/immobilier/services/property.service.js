import { Property } from '../../../shared/models/property.model';

export class PropertyService {
    static getProperties() {
        const data = [
            { title: "Villa moderne", location: "Quartier Diguel", price: "150 000 000 FCFA" },
            { title: "Appartement", location: "Quartier Paris-Congo", price: "80 000 000 FCFA" },
            { title: "Maison familiale", location: "Quartier Farcha", price: "120 000 000 FCFA" }
        ];
        return data.map(item => Property.fromJson(item));
    }
}