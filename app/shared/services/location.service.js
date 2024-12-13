import { CONFIG } from '../config';

export class LocationService {
    static getMapUrl(center = CONFIG.MAP_DEFAULT_CENTER) {
        return `https://www.openstreetmap.org/export/embed.html?bbox=${center.lng-0.02},${center.lat-0.02},${center.lng+0.02},${center.lat+0.02}&layer=mapnik`;
    }

    static async searchAddress(query) {
        // Implémentation future de la recherche d'adresse
        console.log("Recherche d'adresse:", query);
        return [];
    }
}