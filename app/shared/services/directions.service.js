import { CONFIG } from '../config';

export class DirectionsService {
    static async getRoute(start, end) {
        try {
            // Calcul d'itinéraire
            return {
                distance: '0 km',
                duration: '0 min',
                steps: []
            };
        } catch (error) {
            console.error('Erreur de calcul d\'itinéraire:', error);
            return null;
        }
    }

    static formatCoordinates(lat, lng) {
        return `${lat.toFixed(6)},${lng.toFixed(6)}`;
    }
}