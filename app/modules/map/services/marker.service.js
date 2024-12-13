import { StorageService } from '../../../shared/services/storage.service';

export class MarkerService {
    static async saveMarker(markerData) {
        const markers = await this.getMarkers();
        markers.push(markerData);
        await StorageService.saveData('markers', markers);
    }

    static async getMarkers() {
        const markers = await StorageService.getData('markers');
        return markers || [];
    }
}